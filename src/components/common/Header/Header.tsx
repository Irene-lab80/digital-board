import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';
import style from './Header.module.scss';
import Profile from '../ProfileButton/ProfileButton';

const Header = () => (
  <div className={style.header_wrapper}>
    <header className={style.header}>
      <Logo />
      <Search />
      <Button buttonTitle="Подать объявление" />
      <Profile title="Войти" />
    </header>
  </div>
);

export default Header;
