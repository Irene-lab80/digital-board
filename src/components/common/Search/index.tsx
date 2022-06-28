import React from 'react';
// eslint-disable-next-line import/no-unresolved
// import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Search from 'antd/lib/input/Search';
import { NavLink } from 'react-router-dom';
import style from './Search.module.scss';

type CustomSearchType = {
  onSearch: any;
}

const CustomSearch = ({ onSearch }: CustomSearchType) => {
  const suffix = (
    <SearchOutlined
      style={{
        opacity: '0.4',
        fontSize: '24px'
      }}
    />
  );

  return (
    // <Search
    //   allowClear
    //   enterButton="Искать"
    //   onSubmit={onSearch}
    //   onSearch={onSearch}
    //   prefix={suffix}
    // />
    <form className={style.wrapper}>
      <Input
        className={style.input}
        type="search"
        allowClear
        prefix={suffix}
        id="mySearch"
        name="q" />
      <NavLink to="/search">
        <div className={style.btnWrapper}>
          <button className="btn btn--primary" type="button" onSubmit={onSearch}>Искать</button>
        </div>
      </NavLink>
    </form>
  );
};

export default CustomSearch;
