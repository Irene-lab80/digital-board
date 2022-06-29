import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import ViewsNumber from '../../ViewsNumber';
import style from './Card.module.scss';

type CardType = {
  id: number | undefined;
  title: string | undefined;
  key: number | undefined;
  tag: string | undefined ;
  description: string | undefined;
  price: number | undefined;
  date: string | undefined;
  views: number | undefined;
  src: string | undefined;
};

const Card = ({ id, title, key, tag, description, price, date, views, src }: CardType) => (
  <li key={key}>
    <Link to={`product/${id}`}>
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
              {`${(price)?.toLocaleString('ru')} Р `}
            </div>
            <div className={style.footer}>
              <div className={style.date}>{moment(date).format('LL')}</div>
              <ViewsNumber cname="">{views}</ViewsNumber>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </li>
);

export default Card;
