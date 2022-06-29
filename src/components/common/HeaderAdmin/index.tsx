import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../Header/Logo';
import style from './HeaderAdmin.module.scss';
import DropDownProfileBtnAdmin from '../DropDownProfileBtnAdmin/Index';

const HeaderAdmin = () => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.profileLock} />
      <div className={style.profileButton}>
        <DropDownProfileBtnAdmin />
      </div>
      <div className={style.burger}>
        <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
      </div>
    </header>
  </div>
);
export default HeaderAdmin;
