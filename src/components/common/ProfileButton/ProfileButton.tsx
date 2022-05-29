import React from 'react';
import style from './ProfileButton.module.scss';

type profilePropsType = {
  title: string;
};

const ProfileButton = ({ title }: profilePropsType) => (
  <div className={style.profileButton}>
    <span className={style.profile__lock} />
    <span className={style.profile__icon} />
    <span className={style.profile__text}>{title}</span>
  </div>
);

export default ProfileButton;
