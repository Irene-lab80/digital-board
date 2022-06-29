import { CloseOutlined } from '@ant-design/icons';
import React from 'react';

const HideSearchMobile = ({ onClick }: any) => (
  <button type="button" onClick={onClick}>
    <CloseOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
  </button>
);

export default HideSearchMobile;
