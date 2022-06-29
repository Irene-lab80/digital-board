import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../../assets/images/logo-icon.svg';
import style from './Logo.module.scss';

const Logo = () => (
  <NavLink className={style.logo} to="/">
    <img className={style.logo__img} alt="logo " src={logoImg} />
    <h1 className={style.logo__text}>СТИКЕР</h1>
  </NavLink>
);

export default Logo;
