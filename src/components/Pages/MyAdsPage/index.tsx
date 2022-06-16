import React from 'react';
import { Table } from 'antd';
import MenuDots from '../../common/svg/MenuDots';
import style from './MyAdsPage.module.scss';
import CustomButton from '../../common/CustomButton';
import PlusSvg from '../../common/svg/PlusSvg';

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
    <nav className={style.nav}>Админ меню</nav>
    <main className={style.main}>
      <div className={style.top}>
        <div className={style.titleWrapper}>
          <h2 className={style.title}>Объявления</h2>
          <span className={style.subtitle}>Всего: 45</span>
        </div>
        <div className={style.btnWrapper}>
          <CustomButton buttonStyle="btn--primary" onClick={() => {}}>
            Добавить
            <span className={style.icon}><PlusSvg /></span>
          </CustomButton>
        </div>
      </div>
      <div className={style.table}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </main>
  </div>

);

export default MyAdsPage;
