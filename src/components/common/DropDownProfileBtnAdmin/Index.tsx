import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import style from './DropDownProfileBtn.module.scss';
import ExitSvg from '../svg/ExitSvg';
import BookSvg from '../svg/BookSvg';
import PanelSvg from '../svg/PanelSvg';
import PersonSvg from '../svg/PersonSvg';
import PersonSvgActive from '../svg/PersonSvgActive';

// TODO: переделать стили? СДелать отдельный компонент?
const menu = (
  <Menu title="">
    <Menu.Item style={{
      fontSize: '16px',
      fontWeight: 700,
      paddingTop: 16,
      paddingBottom: 16,
    }}>
      <span className={style.avatar}>AA</span>
      Admin
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
      icon={<span className={style.icon}><PanelSvg /></span>}>
      Админ Панель
    </Menu.Item>
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
  </Menu>
);

const DropDownProfileBtnAdmin = () => {
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

export default DropDownProfileBtnAdmin;
