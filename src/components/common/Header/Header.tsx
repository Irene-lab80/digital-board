/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import Logo from './Logo';
import style from './Header.module.scss';
import ModalBtn from '../ModalBtn';
import ProfileButton from '../ProfileButton';
import DropDownProfileBtn from '../DropDownProfileBtn/Index';
import CustomButton from '../CustomButton';
import { GetUserName } from '../../../store/auth/selectors';
import { SetSearchTermAction } from '../../../store/search/actions';
import ShowSearchMobile from './ShowSearchMobile';
import HideSearchMobile from './HideSearchMobile';
import BurgerMenuIcon from './BurgerMenuIcon';
import ProfileLockIcon from '../svg/ProfileLockIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // // close/open search on mobile
  // const [open, setOpen] = useState(false);
  // const showSearch = () => {
  //   setOpen(true);
  // };
  // const hideSearch = () => {
  //   setOpen(false);
  // };

  // const searchHandler = (searchTerm: string) => {
  //   dispatch(SetSearchTermAction(searchTerm));
  //   navigate('/search');
  //   setOpen(false);
  // };

  // Mobile Menu
  const [openMenu, setOpenMenu] = useState(false);
  const showMenu = () => {
    setOpenMenu(true);
    document.body.style.overflow = 'hidden';
  };

  const hideMenu = () => {
    setOpenMenu(false);
    document.body.style.overflow = '';
  };

  // const searchHandler = (searchTerm: string) => {
  //   dispatch(SetSearchTermAction(searchTerm));
  //   navigate('/search');
  //   setOpen(false);
  // };

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.searchWrapper}>
          <div className={style.search}>
            {/* <Input.Search
              onSearch={searchHandler}
              enterButton="Искать"
              allowClear
              prefix={<SearchOutlined style={{
                opacity: '0.4',
                fontSize: '24px'
              }} />}
              /> */}
          </div>
          <div className={style.searchMobileIcon}>
            {/* {!open
              ? <ShowSearchMobile onClick={showSearch} />
              : <HideSearchMobile onClick={hideSearch} />}
            {open && <Input.Search
              className={style.searchMobile}
              onSearch={searchHandler}
              allowClear />} */}
          </div>
        </div>
        <div className={style.button}>
          {name ? (
            <Link to="edit-ad">
              <CustomButton onClick={() => {}} buttonStyle="btn--accent" type="button">
                Подать объявление
              </CustomButton>
            </Link>) : <ModalBtn /> }
        </div>
        <div className={style.profileLockIcon}>
          <ProfileLockIcon />
        </div>
        <div className={style.profileButton}>
          {name ? <DropDownProfileBtn /> : <ProfileButton>Войти</ProfileButton> }
        </div>
        <div className={style.burger}>
          {!openMenu
            ? <BurgerMenuIcon onClick={showMenu} />
            : <HideSearchMobile onClick={hideMenu} />}

          {openMenu
          && <div className={style.MobileMenu}>
              <Link to="edit-ad">
                <CustomButton onClick={() => {}} buttonStyle="btn--accent" type="button">
                  Подать объявление
                </CustomButton>
              </Link>
              <ul className={style.list}>
                <li className={style.listItem}>Вся лента</li>
                <li className={style.listItem}>Автомобили</li>
                <li className={style.listItem}>Аксессуары</li>
                <li className={style.listItem}>Мебель</li>
                <li className={style.listItem}>Одежда</li>
                <li className={style.listItem}>Спорт</li>
                <li className={style.listItem}>Техника</li>
                <li className={style.listItem}>Товары для дома</li>
              </ul>
             </div>}
        </div>
      </header>
    </div>
  );
};
export default Header;
