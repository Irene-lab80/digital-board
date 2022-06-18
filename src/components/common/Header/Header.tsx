import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search';
import style from './Header.module.scss';
import ModalBtn from '../ModalBtn';
import ProfileButton from '../ProfileButton';
import GetUserName from '../../../store/selectors';
import DropDownProfileBtn from '../DropDownProfileBtn/Index';
import CustomButton from '../CustomButton';

const Header = () => {
  const name = useSelector(GetUserName);
  return (
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
          {name ? (
            <Link to="edit-ad">
              <CustomButton onClick={() => {}} buttonStyle="btn--accent">
                Подать объявление
              </CustomButton>
            </Link>) : <ModalBtn /> }
        </div>
        <div className={style.profileLock} />
        <div className={style.profileButton}>
          {name ? <DropDownProfileBtn /> : <ProfileButton>Войти</ProfileButton> }
        </div>
        <div className={style.burger}>
          <MenuOutlined style={{ fontSize: '24px', opacity: '0.4' }} />
        </div>
      </header>
    </div>
  );
};
export default Header;
