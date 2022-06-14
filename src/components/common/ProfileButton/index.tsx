import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ProfileButton.module.scss';

type profilePropsType = {
  children: any;
  onClick: ()=> void;
};

const ProfileButton:React.FC<profilePropsType> = ({ children, onClick }) => (
  <button type="button" className={style.profileButton} onClick={onClick}>
    <NavLink className={style.profile__wrapper} to="/auth">
      <span className={style.profile__icon} />
      <span className={style.profile__text}>{children}</span>
    </NavLink>
  </button>
);

export default ProfileButton;
