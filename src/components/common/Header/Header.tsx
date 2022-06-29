import React, { useState } from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
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

const Header = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const showSearch = () => {
    setOpen(true);
  };
  const hideSearch = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const searchHandler = (searchTerm: string) => {
    dispatch(SetSearchTermAction(searchTerm));
    navigate('/search');
    setOpen(false);
  };

  // close/open search on mobile

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.searchWrapper}>
          <div className={style.search}>
            <Input.Search
              onSearch={searchHandler}
              enterButton="Искать"
              allowClear
              prefix={<SearchOutlined style={{
                opacity: '0.4',
                fontSize: '24px'
              }} />}
              />
          </div>
          <div className={style.searchMobileIcon}>
            {!open
              ? <ShowSearchMobile onClick={showSearch} />
              : <HideSearchMobile onClick={hideSearch} />}
            {open && <Input.Search
              className={style.searchMobile}
              onSearch={searchHandler}
              allowClear
              /> }
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
