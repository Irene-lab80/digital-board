import React from 'react';
import img from '../../../assets/images/banner.png';
import style from './Banner.module.scss';

const Banner = () => (
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

export default Banner;
