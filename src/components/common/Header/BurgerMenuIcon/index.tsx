import { MenuOutlined } from '@ant-design/icons';
import React from 'react';

const BurgerMenuIcon = ({ onClick }: any) => (
  <button type="button" onClick={onClick}>
    <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
  </button>
);

export default BurgerMenuIcon;
