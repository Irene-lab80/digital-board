import React from 'react';
import img from '../../../assets/images/main-page-banner-pic.png';
import style from './MainPage.module.scss';

const MainPage = () => (
  <div className={style.wrapper}>
    <div className={style.info}>
      <h2 className={style.title}>Доска объявлений</h2>
      <p className={style.text}>
        Находи тысячи разнообразных товаров и услуг от продавцов со всей страны. Безопасные расчеты.
        Удобный сервис доставки
      </p>
    </div>
    <img className={style.img} src={img} alt="Cart" />
  </div>
);

export default MainPage;
