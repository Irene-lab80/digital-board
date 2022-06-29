/* eslint-disable import/no-unresolved */
import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSlider from '../../common/ProductSlider';
import style from './ProductPage.module.scss';
import ViewsNumber from '../../common/ViewsNumber';
import ShowTelButton from '../../common/ShowTelButton';
import ProductMap from '../../common/ProductMap';
import CardsSmall from '../../common/CardsSmall';
import 'moment/locale/ru'; // without this line it didn't work
import GoBackBtn from '../../common/GoBackBtn';
import { getProducts } from '../../../store/products/selectors';
import { GetProductsAction } from '../../../store/products/actions';

moment.locale('ru');

type ProductPagePropsType = {
  productInfo: {
    id: number | undefined;
    tag: string | undefined;
    title: string | undefined;
    description: string | undefined;
    price: number | undefined;
    date: string | undefined;
    views: number | undefined;
    src: string | undefined;
    tel: string | undefined;
    location: string | undefined;
    coordinates: number[] | undefined
  } | undefined;
}
// so that YMaps won't crash on undefined

const ProductPage = ({ productInfo }:ProductPagePropsType) => {
  const defaultCoordinates = [56.30, 43.98]; // without it YMaps carahes all page

  return (
    <>
      <GoBackBtn> </GoBackBtn>
      <div className={style.wrapper}>
        <main className={style.main}>
          <div className={style.date}>{moment(productInfo?.date).format('LL')}</div>
          <h2 className={style.title}>{productInfo?.title}</h2>
          {/* TODO: is that id? */}
          <div className={style.number}>WS-25645-253-55</div>
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
            ] && [defaultCoordinates]} />
          </div>
        </main>
        <aside className={style.aside}>
          <div className={style.price}>{`${productInfo?.price?.toLocaleString('ru')} Р`}</div>
          <div className={style.button}>
            <ShowTelButton>{productInfo?.tel}</ShowTelButton>
          </div>
          <div className={style.more}>Смотрите также:</div>
          <CardsSmall bigTag={productInfo?.tag} id={productInfo?.id} />
        </aside>
      </div>
    </>
  );
};

export default ProductPage;
