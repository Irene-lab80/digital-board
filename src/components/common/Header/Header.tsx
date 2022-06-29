import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search';
import style from './Header.module.scss';
import ModalBtn from '../ModalBtn';
import ProfileButton from '../ProfileButton';
import DropDownProfileBtn from '../DropDownProfileBtn/Index';
import CustomButton from '../CustomButton';
import { GetUserName } from '../../../store/auth/selectors';
import { SetSearchTermAction } from '../../../store/search/actions';

const Header = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const searchHandler = (searchTerm: string) => {
    dispatch(SetSearchTermAction(searchTerm));
    navigate('/search');
  };

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.searchWrapper}>
          <div className={style.search}>
            <Search onSearch={searchHandler} />
          </div>
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
