import React from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from '../../common/ProductSlider';
import style from './ProductPage.module.scss';
import arrow from '../../../assets/images/arrow-back.svg';
import ViewsNumber from '../../common/ViewsNumber';
import ShowTelButton from '../../common/ShowTelButton';

type ProductPagePropsType = {
  productInfo: {
    // id: number;
    tag: string;
    title: string;
    description: string;
    price: string;
    date: string;
    views: string;
    src: string;
    tel: string;
  } | undefined;
}

const ProductPage = ({ productInfo }: ProductPagePropsType) => (
  <>
    <Link to="/">
      <img className={style.arrow} src={arrow} alt="Arrow back" />
    </Link>
    <div className={style.wrapper}>
      <main className={style.main}>
        <div className={style.date}>{productInfo?.date}</div>
        <h2 className={style.title}>{productInfo?.title}</h2>
        <div className={style.number}>WS-25645-253-55</div>
        {/* TODO: change, there were a way to add class to a component?  */}
        <ViewsNumber cname={style.views}>11111</ViewsNumber>
        <ProductSlider cname={style.slider} />
      </main>

      <aside className={style.aside}>
        <div className={style.price}>{productInfo?.price}</div>
        {/* TODO: google how to better set outer margin in react */}
        <div className={style.button}>
          <ShowTelButton>{productInfo?.tel}</ShowTelButton>
        </div>
        <div className={style.more}>Смотрите также:</div>
      </aside>
    </div>
  </>
);

export default ProductPage;
