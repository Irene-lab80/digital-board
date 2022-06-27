/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Feed.module.scss';
import CustomButton from '../CustomButton';
import LoadSvg from '../svg/LoadSvg';
import MenuItem from '../MenuItem';
import CardList from '../CardList';
import getProducts from '../../../store/products/selectors';

const Feed = () => {
  const productData = useSelector(getProducts);

  const [filter, setFilter]: [any, any] = useState('Все товары');
  const filterHandler = (event: any) => {
    setFilter(event.target.getAttribute('id'));
  };

  // @ts-ignore
  const menuItems = [...new Set(productData.map((Val) => Val.tag))];
  console.log(menuItems);
  return (
    <div className={style.feedwrapper}>
      <nav className={style.scrollingWrapper}>
        <MenuItem className={filter === 'Все товары' ? 'menu-item--active menu-item' : 'menu-item'} id="Все товары" onClick={filterHandler}>Все товары</MenuItem>
        <MenuItem className={filter === 'Автомобили' ? 'menu-item--active  menu-item' : 'menu-item'} id="Автомобили" onClick={filterHandler}>Автомобили</MenuItem>
        <MenuItem className={filter === 'Аксессуары' ? 'menu-item--active  menu-item' : 'menu-item'} id="Аксессуары" onClick={filterHandler}>Аксессуары</MenuItem>
        <MenuItem className={filter === 'Мебель' ? 'menu-item--active  menu-item' : 'menu-item'} id="Мебель" onClick={filterHandler}>Мебель</MenuItem>
        <MenuItem className={filter === 'Одежда' ? 'menu-item--active  menu-item' : 'menu-item'} id="Одежда" onClick={filterHandler}>Одежда</MenuItem>
        <MenuItem className={filter === 'Спорт' ? 'menu-item--active  menu-item' : 'menu-item'} id="Спорт" onClick={filterHandler}>Спорт</MenuItem>
        <MenuItem className={filter === 'Техника' ? 'menu-item--active  menu-item' : 'menu-item'} id="Техника" onClick={filterHandler}>Техника</MenuItem>
        <MenuItem className={filter === 'Товары для дома' ? 'menu-item--active  menu-item' : 'menu-item'} id="Товары для дома" onClick={filterHandler}>Товары для дома</MenuItem>
      </nav>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Вся лента</h2>
      </div>
      <div className={style.cardsWrapper}>
        {/* TODO: add loader? */}
        {/* {productData ? <CardList data={productData} /> : <div className="lds-dual-ring" /> } */}
        <CardList data={productData} />
      </div>
      <div className={style.btnWrapper}>
        <CustomButton onClick={() => {}} buttonStyle="btn--outline">
          <LoadSvg />
          <span className={style.btnText}>
            Загрузить еще
          </span>
        </CustomButton>
      </div>
    </div>
  );
};
export default Feed;
