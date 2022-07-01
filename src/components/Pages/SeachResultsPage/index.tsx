/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// import Search from 'antd/lib/input/Search';
import { List } from 'antd';
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
  const productsData = useSelector(getProducts);

  const results = productsData.filter((val) => {
    if (search === '') {
      return val;
    } if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  const pageSize = 6;

  return (
    <div className="page-wrapper">
      <div className={style.pageWrapper}>
        <span className={style.serchResulstNumber}>
          Найдено:
          {' '}
          {results.length}
        </span>

        <List
          itemLayout="vertical"
          size="large"
          pagination={results.length > pageSize && { pageSize }}
          dataSource={results}
          renderItem={(data) => (
            <Link to={`/product/${data.id}`} key={data.id}>
              <div className={style.productWrapper}>
                <h2 className={style.title}>{data.title}</h2>
                <p className={style.description}>{data.description}</p>
                <div className={style.date}>
                  {moment(data.date).format('LL')}
                </div>
              </div>
            </Link>
          )}
        />
      </div>
    </div>
  );
};
export default SeachResultsPage;
