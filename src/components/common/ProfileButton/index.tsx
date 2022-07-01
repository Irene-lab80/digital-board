import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonSvg from '../svg/PersonSvg';
import ProfileLockIcon from '../svg/ProfileLockIcon';
import style from './ProfileButton.module.scss';

type ProfileButtonType = {
  children: string;
}

const ProfileButton = ({ children }: ProfileButtonType) => (
  <NavLink className={style.profile__wrapper} to="/auth">
    <div className={style.wrapper}>
      <span className={style.icon}>
        <PersonSvg />
      </span>
      <span className={style.iconMobile}>
        <ProfileLockIcon />
      </span>
      <span className={style.text}>{children}</span>
    </div>
  </NavLink>
);

export default ProfileButton;
