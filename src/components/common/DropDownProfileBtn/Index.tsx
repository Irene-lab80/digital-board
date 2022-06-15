import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import style from './DropDownProfileBtn.module.scss';
import ExitSvg from '../svg/ExitSvg';
import BookSvg from '../svg/BookSvg';

// TODO: переделать стили? СДелать отдельный компонент?
const menu = (
  <Menu title="">
    <Menu.Item style={{
      fontSize: '16px',
      fontWeight: 700,
      paddingTop: 16,
      paddingBottom: 16,

    }}>
      <span className={style.avatar}>UN</span>
      UserName
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
      Выход

    </Menu.Item>
  </Menu>
);

const DropDownProfileBtn = () => (
  <>
    {/* @ts-ignore this lib is incompatible with react18 */}
    <Dropdown overlay={menu}>
      <button type="button" onClick={(e) => e.preventDefault()}>
        <Space>
          {/* <NavLink className={style.profile__wrapper} to="/auth"> */}
          <span className={style.profile__icon} />
          <span className={style.profile__text}>Профиль</span>
          {/* </NavLink> */}
          <DownOutlined />
        </Space>
      </button>
    </Dropdown>
  </>
);

export default DropDownProfileBtn;
