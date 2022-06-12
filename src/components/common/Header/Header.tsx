import React from 'react';
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
      <div className={style.search}>
        <Search />
      </div>
      <div className={style.button}>
        <CustomButton buttonStyle="btn--accent">Подать объявление</CustomButton>
      </div>
      <div className={style.profileButton}>
        <ProfileButton title="Войти" />
      </div>
    </header>
  </div>
);

export default Header;
