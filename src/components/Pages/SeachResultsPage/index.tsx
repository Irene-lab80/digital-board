/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// import Search from 'antd/lib/input/Search';
import { Pagination } from 'antd';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../../store/products/selectors';
import GetSearchTerm from '../../../store/search/selector';
import style from './SeachResultsPage.module.scss';

moment.locale('ru');

const SeachResultsPage = () => {
  const search = useSelector(GetSearchTerm);
  const data = useSelector(getProducts);

  const results = data
    .filter((val) => {
      if (search === '') {
        return val;
      } if (val.title.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .map((val) => (
      <Link to={`/product/${val.id}`} key={val.id}>
        <div className={style.productWrapper}>
          <h2 className={style.title}>{val.title}</h2>
          <p className={style.description}>{val.description}</p>
          <div className={style.date}>
            {moment(val.date).format('LL')}
          </div>
        </div>
      </Link>
    ));
  return (
    <div className={style.pageWrapper}>
      <span className={style.serchResulstNumber}>Найдено: </span>
      {results.length}

      {results}

      <Pagination
        className={style.pagination}
        defaultCurrent={1}
        total={results.length}
          />
    </div>
  );
};
export default SeachResultsPage;
