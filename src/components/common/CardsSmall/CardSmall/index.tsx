import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './CardSmall.module.scss';

type CardPropsType = {
  id: number;
  // tag: string;
  title: string;
  // date: string;
  src: string;
  // date: string;
};

const CardSmall = ({ id, title, src }: CardPropsType) => (
  <NavLink to={`/product/${id}`}>
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={src} alt="product" />
      </div>
      <div className={style.title}>{title}</div>
      {/* <div className={style.title}>{date}</div> */}
    </div>
  </NavLink>
);

export default CardSmall;
