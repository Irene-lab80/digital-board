import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import BookSvg from '../svg/BookSvg';
import ExitSvg from '../svg/ExitSvg';
import style from './ProfileMenu.module.scss';

const ProfileMenu = () => (
  <Menu className={style.form}>
    <Menu.Item
      className="item title">
      <div className={style.avatar}>А</div>
      <div className={style.text}>Админ</div>
    </Menu.Item>
    <Link to="my-ads">
      <Menu.Item
        className="item"
        icon={<span className={style.icon}><BookSvg /></span>}>
        <span className={style.text}>Объявления</span>
      </Menu.Item>
    </Link>
    <Menu.Item
      className="item"
      icon={<span className={style.icon}><ExitSvg /></span>}>
      <span className={style.text}>Выход</span>
    </Menu.Item>
  </Menu>
);

export default ProfileMenu;
