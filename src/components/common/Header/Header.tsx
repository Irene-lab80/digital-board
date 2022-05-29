import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';
import style from './Header.module.scss';
import ProfileButton from '../ProfileButton/ProfileButton';

const Header = () => (
  <div className={style.header_wrapper}>
    <header className={style.header}>
      <div className={style.header__logo}>
        <Logo />
      </div>
      <div className={style.header__search}>
        <Search />
      </div>
      <div className={style.header__button}>
        <Button buttonTitle="Подать объявление" />
      </div>
      <div className={style.header__profileButton}>
        <ProfileButton title="Войти" />
      </div>
    </header>
  </div>
);

export default Header;
