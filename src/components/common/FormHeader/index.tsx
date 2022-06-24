import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FormHeader.module.scss';

type FormHeaderType = {
  children: React.ReactNode;
}

const FormHeader:React.FC<FormHeaderType> = ({ children }) => (
  <div>
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
    <div className={style.form}>
      {children}
    </div>
  </div>
);

export default FormHeader;
