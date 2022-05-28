import React from 'react';
import logoImg from '../../../assets/images/logo-icon.svg';
import style from './Logo.module.scss';

const Logo = () => (
  <a className={style.logo} href="#!">
    <img className={style.logo__img} alt="logo " src={logoImg} />
    <h1 className={style.logo__text}>СТИКЕР</h1>
  </a>
);

export default Logo;
