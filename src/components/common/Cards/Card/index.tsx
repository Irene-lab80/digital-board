import React from 'react';
import { Link } from 'react-router-dom';
import ViewsNumber from '../../ViewsNumber';
import style from './Card.module.scss';

type CardPropsType = {
  // id: number;
  tag: string;
  title: string;
  description: string;
  price: number;
  date: string;
  views: number;
  src: string;
};

const Card = ({ tag, title, description, price, date, views, src }: CardPropsType) => (
  <Link to={`product/${title}`}>
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={src} alt="product" />
        <div className={style.tag}>{tag}</div>
      </div>
      <div className={style.info}>
        <div className={style.top}>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </div>
        <div className={style.bottom}>
          <div className={style.price}>
            {`${(price).toLocaleString('ru')
            } Р `}
          </div>
          <div className={style.footer}>
            <div className={style.date}>{date}</div>
            <ViewsNumber cname="">{views}</ViewsNumber>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default Card;
