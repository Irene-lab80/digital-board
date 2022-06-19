import React, { useState } from 'react';
import style from './Feed.module.scss';
import CustomButton from '../CustomButton';
import Cards from '../Cards';
import LoadSvg from '../svg/LoadSvg';

const Feed = () => {
  const [filter, setFilter] = useState('Все товары');
  const filterHandler = (event: any) => {
    setFilter(event.target.getAttribute('id'));
  };
  // const typeNames = ['active', 'inactive'];
  // const [activeType, setActiveType] = useState(typeNames[0]);

  return (
    <div className={style.feedwrapper}>
      <nav className={style.nav}>
        <ul className={style.menu}>
          <li className={filter === 'Все товары' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Все товары"
              onClick={filterHandler}>
              Все товары
            </button>
          </li>
          <li className={filter === 'Автомобили' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Автомобили"
              onClick={filterHandler}>
              Автомобили
            </button>
          </li>
          <li className={filter === 'Аксессуары' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Аксессуары"
              onClick={filterHandler}>
              Аксессуары
            </button>
          </li>
          <li className={filter === 'Мебель' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Мебель"
              onClick={filterHandler}>
              Мебель
            </button>
          </li>
          <li className={filter === 'Одежда' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Одежда"
              onClick={filterHandler}>
              Одежда
            </button>
          </li>
          <li className={filter === 'Спорт' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Спорт"
              onClick={filterHandler}>
              Спорт
            </button>
          </li>
          <li className={filter === 'Техника' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Техника"
              onClick={filterHandler}>
              Техника
            </button>
          </li>
          <li className={filter === 'Товары для дома' ? 'menu-item--active' : ''}>
            <button
              className="menu-item"
              type="button"
              id="Товары для дома"
              onClick={filterHandler}>
              Товары для дома
            </button>
          </li>
        </ul>
      </nav>

      <div className={style.titleWrapper}>
        <h2 className={style.title}>Вся лента</h2>
      </div>
      <div className={style.cardsWrapper}>
        <Cards filterName={filter} />
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
