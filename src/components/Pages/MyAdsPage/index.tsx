import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import MenuDots from '../../common/svg/MenuDots';
import style from './MyAdsPage.module.scss';
import CustomButton from '../../common/CustomButton';
import PlusSvg from '../../common/svg/PlusSvg';
import ProfileMenu from '../../common/ProfileMenu';

const dataSource = [
  {
    key: '1',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Да'
  },
  {
    key: '2',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Да'
  },
  {
    key: '3',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Да'
  },
  {
    key: '4',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Да'
  },
  {
    key: '5',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '6',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '7',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '8',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '9',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '10',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '11',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '12',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '13',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '14',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '15',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '16',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '17',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '18',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '19',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '20',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '21',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '22',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '23',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '24',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '25',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '26',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '27',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  },
  {
    key: '28',
    title: 'Чепчик',
    category: 'Одежда',
    date: '12 апреля 2022',
    published: 'Нет'
  }
];

const columns = [
  {
    title: 'Название объявления',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Дата публикации',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Публикация',
    dataIndex: 'published',
    key: 'published',
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <MenuDots />
  },
];

const MyAdsPage = () => (
  <div className={style.wrapper}>
    <ProfileMenu />
    <main className={style.main}>
      <div className={style.top}>
        <div className={style.titleWrapper}>
          <h2 className={style.title}>Объявления</h2>
          <span className={style.subtitle}>Всего: 45</span>
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
          dataSource={dataSource}
          columns={columns}
          />
      </div>
    </main>
  </div>

);
export default MyAdsPage;
