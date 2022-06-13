import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';

const onSearch = (value: string) => console.log(value);

const suffix = (
  <SearchOutlined
    style={{
      opacity: '0.4',
      fontSize: '24px'
    }}
  />
);

export default () => (
  <Search
    placeholder=""
    allowClear
    enterButton="Искать"
    onSearch={onSearch}
    prefix={suffix}
  />
);
