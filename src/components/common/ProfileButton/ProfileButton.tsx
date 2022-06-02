import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ProfileButton.module.scss';

type profilePropsType = {
  title: string;
};

const ProfileButton = ({ title }: profilePropsType) => (
  <div className={style.profileButton}>
    <NavLink className={style.profile__wrapper} to="/auth">
      <span className={style.profile__lock} />
      <span className={style.profile__icon} />
      <span className={style.profile__text}>{title}</span>
    </NavLink>
  </div>
);

export default ProfileButton;
