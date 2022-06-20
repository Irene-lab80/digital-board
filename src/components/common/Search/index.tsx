import React from 'react';
// eslint-disable-next-line import/no-unresolved
// import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

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
    <form action="/search">
      <Input type="search" allowClear prefix={suffix} id="mySearch" name="q" />
      <button type="submit" onSubmit={onSearch}>Искать</button>
    </form>
  );
};

export default CustomSearch;
