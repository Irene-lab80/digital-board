import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const SearchMobile = ({ onClick }: any) => (
  <button type="button" onClick={onClick}>
    <SearchOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
  </button>
);

export default SearchMobile;
