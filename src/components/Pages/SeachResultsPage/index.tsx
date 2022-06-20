/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../helpers';
import CustomSearch from '../../common/Search';

const SeachResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <CustomSearch onSearch={onSearch} />
      {data
        .filter((val) => {
          if (searchTerm === '') {
            return val;
          } if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
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
