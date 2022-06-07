import React from 'react';
import style from './Card.module.scss';
import img from '../../../assets/images/1.jpg';

type CardPropsType = {
  tag: string;
  title: string;
  description: string;
  price: string;
  date: string;
  viewNumber: string;
};

const Card = ({ tag, title, description, price, date, viewNumber }: CardPropsType) => (
  <div className={style.wrapper}>
    <div className={style.imgWrapper}>
      <img className={style.img} src={img} alt="product" />
      <div className={style.tag}>{tag}</div>
    </div>
    <div className={style.info}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>

      {/* TODO: price => number?? */}
      <div className={style.price}>{price}</div>
      <div className={style.footer}>
        <div className={style.date}>{date}</div>
        <div className={style.views}>
          <span className={style.icon} />
          <span className={style.viewNumber}>{viewNumber}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
