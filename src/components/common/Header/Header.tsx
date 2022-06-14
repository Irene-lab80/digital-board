import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from '../Logo/Logo';
import Search from '../Search';
import style from './Header.module.scss';
import ModalBtn from '../ModalBtn';
import DropDownProfileBtn from '../DropDownProfileBtn/Index';

const Header = () => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.searchWrapper}>
        <div className={style.search}><Search /></div>
        <div className={style.searchMobile}><SearchOutlined style={{ fontSize: '24px', opacity: '0.4' }} /></div>
      </div>
      <div className={style.button}>
        <ModalBtn />
      </div>
      <div className={style.profileLock} />
      <div className={style.profileButton}>
        <DropDownProfileBtn />
      </div>
      <div className={style.burger}>
        <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
      </div>
    </header>
  </div>
);
export default Header;
