import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PersonSvg from '../svg/PersonSvg';
import PersonSvgActive from '../svg/PersonSvgActive';
import style from './ProfileButton.module.scss';

type ProfileButtonType = {
  children: string;
}

const ProfileButton = ({ children }: ProfileButtonType) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <NavLink className={style.profile__wrapper} to="/auth">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
        className={style.wrapper}>
        {!isHovering && (
        <span className={style.icon}>
          <PersonSvg />
        </span>
        )}
        {isHovering && (
        <span className={style.icon}>
          <PersonSvgActive />
        </span>
        )}
        <span className={style.text}>{children}</span>
      </div>
    </NavLink>
  );
};

export default ProfileButton;
