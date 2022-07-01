/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import MenuDots from '../../common/svg/MenuDots';
import style from './MyAdsPage.module.scss';
import CustomButton from '../../common/CustomButton';
import PlusSvg from '../../common/svg/PlusSvg';
import ProfileMenu from '../../common/ProfileMenu';
import { getProducts } from '../../../store/products/selectors';
import { GetUserEmail } from '../../../store/auth/selectors';

const columns = [
  {
    title: 'Название объявления',
    dataIndex: 'title',
    key: 'title',
    sorter: (a: any, b: any) => a.title.localeCompare(b.title),
  },
  {
    title: 'Категория',
    dataIndex: 'tag',
    key: 'category',

  },
  {
    title: 'Дата публикации',
    dataIndex: 'date',
    key: 'date',
    render: ((date:string) => moment(date).format('LL'))
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <div className={style.MenuDots}><MenuDots /></div>
  },
];

const MyAdsPage = () => {
  const productData = useSelector(getProducts);
  const localUserEmail = useSelector(GetUserEmail);
  const userProductData = productData.filter((el) => el.userEmail === localUserEmail);
  return (
    <div className="page-wrapper">
      <div className={style.wrapper}>
        <div className={style.ProfileMenu}>
          <ProfileMenu />
        </div>
        <main className={style.main}>
          <div className={style.top}>
            <div className={style.titleWrapper}>
              <h2 className={style.title}>Объявления</h2>
              <span className={style.subtitle}>
                Всего:
                {userProductData.length}
              </span>
            </div>
            <div className={style.btnWrapper}>
              <Link to="/edit-ad">
                <CustomButton buttonStyle="btn--primary" onClick={() => {}} type="button">
                  Добавить
                  <span className={style.icon}><PlusSvg /></span>
                </CustomButton>
              </Link>
            </div>
          </div>
          <div className={style.table}>
            <Table
              rowKey={(data) => data.id}
              dataSource={userProductData}
              columns={columns}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyAdsPage;
