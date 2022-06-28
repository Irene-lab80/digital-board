/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// import Search from 'antd/lib/input/Search';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../../../helpers';
import GetSearchTerm from '../../../store/search/selector';
// import CustomSearch from '../../common/Search';

const SeachResultsPage = () => {
  const search = useSelector(GetSearchTerm);

  // const [searchTerm, setSearchTerm] = useState('');

  // const onSearch = (value: string) => {
  //   setSearchTerm(value);
  // };
  // const { id } = useParams();
  // const product = data.find((el) => el.id.toString() === id);

  // return <ProductPage productInfo={product} />;

  return (
    <>
      {data
        .filter((val) => {
          if (search === '') {
            return val;
          } if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((val) => (
          <Link to={`/product/${val.id}`}>
            <div className="product">
              <h2 className="title" key={val.id}>{val.title}</h2>
              <p className="description">{val.description}</p>
              <div className="date">{val.date}</div>
            </div>
          </Link>
        ))}
    </>
  );
};
export default SeachResultsPage;
