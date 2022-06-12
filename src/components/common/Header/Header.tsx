import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import style from './Header.module.scss';
import ProfileButton from '../ProfileButton/ProfileButton';
import CustomButton from '../CustomButton';

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
        <CustomButton onClick={() => {}} buttonStyle="btn--accent">Подать объявление</CustomButton>
      </div>
      <div className={style.profileLock} />
      <div className={style.profileButton}>
        <ProfileButton title="Войти" />
      </div>
      <div className={style.burger}>
        <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
      </div>
    </header>
  </div>
);

export default Header;
