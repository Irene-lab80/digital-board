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
import getProducts from '../../../store/products/selectors';

const columns = [
  {
    title: 'Название объявления',
    dataIndex: 'title',
    key: 'title',
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
    // render: (row: any) => <a> {'123' + row.date} </a>
  },
  // {
  //   title: 'Публикация',
  //   dataIndex: 'published',
  //   key: 'published',
  // },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <MenuDots />
  },
];

const MyAdsPage = () => {
  const productData = useSelector(getProducts);
  // {moment(date).format('LL')}
  return (
    <div className={style.wrapper}>
      <ProfileMenu />
      <main className={style.main}>
        <div className={style.top}>
          <div className={style.titleWrapper}>
            <h2 className={style.title}>Объявления</h2>
            <span className={style.subtitle}>
              Всего:
              {productData.length}
            </span>
          </div>
          <div className={style.btnWrapper}>
            <Link to="/edit-ad">
              <CustomButton buttonStyle="btn--primary" onClick={() => {}}>
                Добавить
                <span className={style.icon}><PlusSvg /></span>
              </CustomButton>
            </Link>
          </div>
        </div>
        <div className={style.table}>
          <Table
            rowKey={(data) => data.id}
            dataSource={productData}
            columns={columns}
          />
        </div>
      </main>
    </div>
  );
};

export default MyAdsPage;
