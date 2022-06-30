/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Feed.module.scss';
import CardList from '../CardList';
import { getProducts } from '../../../store/products/selectors';
import Buttons from './Buttons';

const Feed = () => {
  const productData = useSelector(getProducts);
  const [item, setItem] = useState(productData);

  const menuItems = ['Автомобили', 'Аксессуары', 'Мебель', 'Одежда', 'Спорт', 'Техника', 'Товары для дома'];

  return (

    <div className={style.feedwrapper}>
      <nav className={style.scrollingWrapper}>
        <Buttons
          setItem={setItem}
          menuItems={menuItems}
          />
      </nav>
      {/* TODO: add loader? */}
      {/* {productData ? <CardList data={item} /> : <div className="lds-dual-ring" /> } */}
      {productData ? <CardList data={item} /> : 'loading'}
    </div>
  );
};
export default Feed;
