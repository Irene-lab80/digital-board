import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import getProducts from '../../../../store/products/selectors';

type ButtonsType = {
  setItem: any,
  menuItems: any,
};

const Buttons = ({ setItem, menuItems }: ButtonsType) => {
  const productData = useSelector(getProducts);
  // TODO: сделать активные кнопки?
  const [filter, setFilter]: [any, any] = useState('Все товары');

  const filterItem = (curTag: string) => {
    const newItem = productData.filter((newval) => newval.tag === curTag);
    setItem(newItem);
  };

  return (
    <div className="scrolling-wrapper">
      <button
        type="button"
        className="menu-item--active"
        onClick={() => setItem(productData)}>
        Все товары
      </button>
      {menuItems.map((val: string) => (
        <button
          type="button"
          id={val}
          className={filter === { val } ? 'menu-item--active menu-item' : 'menu-item'}
          onClick={() => filterItem(val)}>
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
