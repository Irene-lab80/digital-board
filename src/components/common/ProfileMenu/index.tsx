import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BookSvg from '../svg/BookSvg';
import ExitSvg from '../svg/ExitSvg';
import style from './ProfileMenu.module.scss';
import { ClearUserNameAction } from '../../../store/auth/actions';
import { GetUserName } from '../../../store/auth/selectors';

// TODO: объеденить с компонентом для хэдера?
const ProfileMenu = () => {
  const name = useSelector(GetUserName);
  const dispatch = useDispatch();
  const exitHandler = () => {
    dispatch(ClearUserNameAction());
  };

  return (
    <Menu className={style.form}>
      <Menu.Item className="item title">
        <div className={style.avatar}>{name.slice(0, 1)}</div>
        <div className={style.text}>{name}</div>
      </Menu.Item>
      <Link to="/my-ads">
        <Menu.Item
          className="item"
          icon={<span className={style.icon}><BookSvg /></span>}>
          <span className={style.text}>Объявления</span>
        </Menu.Item>
      </Link>
      <Link onClick={exitHandler} to="/">
        <Menu.Item
          className="item"
          icon={<span className={style.icon}><ExitSvg /></span>}>
          <span className={style.text}>Выход</span>
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default ProfileMenu;
