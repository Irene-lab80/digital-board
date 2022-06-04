import React from 'react';
import style from './Menu.module.scss';

const Menu = () => (
  <nav>
    <ul className={style.menu}>
      <li className={style.menuItem_accented}>Вся доска</li>
      <li className={style.menuItem_bordered}>Автомобили</li>
      <li className={style.menuItem}>Аксессуары</li>
      <li className={style.menuItem}>Мебель</li>
      <li className={style.menuItem}>Одежда</li>
      <li className={style.menuItem}>Спорт</li>
      <li className={style.menuItem}>Техника</li>
      <li className={style.menuItem}>Товары для дома</li>
    </ul>
  </nav>
);

export default Menu;
