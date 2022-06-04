import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import '../../../assets/styles/_constants.scss';

const onSearch = (value: string) => console.log(value);

const suffix = (
  <SearchOutlined
    style={{
      color: '$color-text-dark-l',
      opacity: '0.4',
    }}
  />
);

export default () => (
  <Search
    // style={{ minWidth: '565px' }}
    placeholder=""
    allowClear
    enterButton="Искать"
    onSearch={onSearch}
    prefix={suffix}
  />
);
