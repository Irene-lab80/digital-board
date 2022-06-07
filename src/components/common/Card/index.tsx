import React from 'react';
import style from './Card.module.scss';

type CardPropsType = {
  tag: string;
  title: string;
  description: string;
  price: string;
  date: string;
  viewNumber: string;
  imgPath: any;
};

const Card = ({ tag, title, description, price, date, viewNumber, imgPath }: CardPropsType) => (
  <div className={style.wrapper}>
    <div className={style.imgWrapper}>
      <img className={style.img} src={imgPath} alt="product" />
      <div className={style.tag}>{tag}</div>
    </div>
    <div className={style.info}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.price}>{`${price} Р `}</div>
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
