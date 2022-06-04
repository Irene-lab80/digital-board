import React from 'react';
import style from './Card.module.scss';

const Card = () => (
  <div className={style.wrapper}>
    <div className={style.imgWrapper}>
      <div className={style.img} />
      <div className={style.tag}>Техника</div>
    </div>

    <div className={style.info}>
      <div className={style.title}>Стиральная машина Bosch </div>
      <div className={style.description}>Машина в хорошем состоянии. Возможен разумный торг </div>
      <div className={style.price}>22 500 Р </div>
      <div className={style.footer}>
        <div className={style.date}>14 апреля 2021</div>
        <div className={style.views}>
          <span className={style.icon} />
          <span className={style.viewNumber}>356</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
