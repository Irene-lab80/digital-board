/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ProductSlider from '../../common/ProductSlider';
import style from './ProductPage.module.scss';
import arrow from '../../../assets/images/arrow-back.svg';
import ViewsNumber from '../../common/ViewsNumber';
import ShowTelButton from '../../common/ShowTelButton';
import ProductMap from '../../common/ProductMap';
import CardsSmall from '../../common/CardsSmall';
import 'moment/locale/ru'; // without this line it didn't work

moment.locale('ru');

type ProductPagePropsType = {
  productInfo: {
    // id: number;
    tag: string;
    title: string;
    description: string;
    price: number;
    date: string;
    views: number;
    src: string;
    tel: string;
    location: string;
    coordinates: number[]
  } | undefined;
}

const ProductPage = ({ productInfo }: ProductPagePropsType) => (
  <>
    <Link to="/">
      <img className={style.arrow} src={arrow} alt="Arrow back" />
    </Link>
    <div className={style.wrapper}>
      <main className={style.main}>
        <div className={style.date}>{moment(productInfo?.date).format('LL')}</div>
        <h2 className={style.title}>{productInfo?.title}</h2>
        {/* TODO: is that id? */}
        <div className={style.number}>WS-25645-253-55</div>
        {/* TODO: change, there were a way to add class to a component?  */}
        <ViewsNumber cname={style.views}>{productInfo?.views}</ViewsNumber>
        <ProductSlider cname={style.slider} src={productInfo?.src} />
        <div className={style.info}>
          <div className={style.infoTitle}>Описание:</div>
          <p className={style.description}>{productInfo?.description}</p>
          <div className={style.infoTitle}>Местоположение:</div>
          <span className={style.location}>{productInfo?.location}</span>
        </div>
        <div className={style.map}>
          <ProductMap coordinates={[
            productInfo?.coordinates
          ]} />
        </div>
      </main>

      <aside className={style.aside}>
        <div className={style.price}>{productInfo?.price}</div>
        {/* TODO: google how to better set outer margin in react */}
        <div className={style.button}>
          <ShowTelButton>{productInfo?.tel}</ShowTelButton>
        </div>
        {/* TODO:  ?? */}
        <div className={style.more}>Смотрите также:</div>
        <CardsSmall />
        {/* <div>Card 1</div>
        <div>Card 2</div> */}
        {/* data => filter(tag) => filter(data) => first two */}
      </aside>
    </div>
  </>
);

export default ProductPage;
