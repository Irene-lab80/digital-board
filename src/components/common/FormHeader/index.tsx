import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FormHeader.module.scss';

const FormHeader = () => (
  <div className={style.wrapper}>
    <NavLink
      className={({ isActive }) => (isActive ? style.button_active : style.button)}
      to="/auth">
      Авторизация
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? style.button_active : style.button)}
      to="/reg">
      Регистрация
    </NavLink>
  </div>
);

export default FormHeader;
