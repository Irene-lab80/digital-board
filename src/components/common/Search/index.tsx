import React from 'react';
// eslint-disable-next-line import/no-unresolved
// import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
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
    <form className={style.wrapper} action="/search">
      <Input className={style.input} type="search" allowClear prefix={suffix} id="mySearch" name="q" />
      <div className={style.btnWrapper}>
        <button className="btn btn--primary" type="submit" onSubmit={onSearch}>Искать</button>
      </div>
    </form>
  );
};

export default CustomSearch;
