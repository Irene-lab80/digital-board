import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search';
import style from './HeaderAdmin.module.scss';
import DropDownProfileBtn from '../DropDownProfileBtn/Index';
import CustomButton from '../CustomButton';

const HeaderAdmin = () => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.searchWrapper}>
        <div className={style.search}><Search /></div>
        <div className={style.searchMobile}>
          <SearchOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
        </div>
      </div>
      <div className={style.button}>
        <Link to="edit-ad">
          <CustomButton onClick={() => {}} buttonStyle="btn--accent">Подать объявление</CustomButton>
        </Link>
      </div>
      <div className={style.profileLock} />
      <div className={style.profileButton}>
        <DropDownProfileBtn />
      </div>
      <div className={style.burger}>
        <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
      </div>
    </header>
  </div>
);
export default HeaderAdmin;
