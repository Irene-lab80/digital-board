import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './DropDownProfileBtn.module.scss';
import ExitSvg from '../svg/ExitSvg';
import BookSvg from '../svg/BookSvg';
import PersonSvg from '../svg/PersonSvg';
import PersonSvgActive from '../svg/PersonSvgActive';
import { GetUserName } from '../../../store/auth/selectors';
import { ClearUserNameAction } from '../../../store/auth/actions';

const DropDownProfileBtn = () => {
  const name = useSelector(GetUserName);
  const nameArr = name.toUpperCase().split(' ');
  const AVATAR_NAME = nameArr[0].slice(0, 1) + nameArr[1].slice(0, 1);
  const dispatch = useDispatch();
  const exitHandler = () => {
    dispatch(ClearUserNameAction());
  };

  const menu = (
    <Menu title="">
      <Menu.Item style={{
        fontSize: '16px',
        fontWeight: 700,
        paddingTop: 16,
        paddingBottom: 16,

      }}>
        <span className={style.avatar}>{AVATAR_NAME}</span>
        {name || 'no_auth'}
      </Menu.Item>
      <Link to="my-ads">
        <Menu.Item
          style={{
            fontSize: '14px',
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 24,
          }}
          icon={<span className={style.icon}><BookSvg /></span>}>
          Мои объявления
        </Menu.Item>
      </Link>
      <Link onClick={exitHandler} to="/">
        <Menu.Item
          style={{
            fontSize: '14px',
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 24,
          }}
          icon={<span className={style.icon}><ExitSvg /></span>}>
          Выход
        </Menu.Item>
      </Link>
    </Menu>
  );
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      {/* @ts-ignore this lib is incompatible with react18 */}
      <Dropdown overlay={menu}>
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
          <span className={style.text}>Профиль</span>
        </div>
      </Dropdown>
    </>
  );
};

export default DropDownProfileBtn;
