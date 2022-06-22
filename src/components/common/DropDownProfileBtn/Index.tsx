import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './DropDownProfileBtn.module.scss';
import ExitSvg from '../svg/ExitSvg';
import BookSvg from '../svg/BookSvg';
import PersonSvg from '../svg/PersonSvg';
import PersonSvgActive from '../svg/PersonSvgActive';
import GetUserName from '../../../store/selectors';

import { ClearUserNameAction } from '../../../store/actions';

// TODO: переделать стили? СДелать отдельный компонент?

const DropDownProfileBtn = () => {
  // const navigate = useNavigate();
  const name = useSelector(GetUserName);
  const dispatch = useDispatch();
  const exitHandler = () => {
    dispatch(ClearUserNameAction());
    // navigate('/', { replace: true });
  };
  const menu = (
    <Menu title="">
      <Menu.Item style={{
        fontSize: '16px',
        fontWeight: 700,
        paddingTop: 16,
        paddingBottom: 16,

      }}>
        <span className={style.avatar}>{name.slice(0, 2).toLocaleUpperCase()}</span>
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
      <Menu.Item
        style={{
          fontSize: '14px',
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
        }}
        icon={<span className={style.icon}><ExitSvg /></span>}>
        <button type="button" onClick={exitHandler}>Выход</button>

      </Menu.Item>
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
