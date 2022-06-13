import React from 'react';
import ProductSlider from '../../common/ProductSlider';
import style from './ProductPage.module.scss';
import arrow from '../../../assets/images/arrow-back.svg';
import ViewsNumber from '../../common/ViewsNumber';
import ShowTelButton from '../../common/ShowTelButton';

const ProductPage = () => (
  <>
    <img className={style.arrow} src={arrow} alt="Arrow back" />
    <div className={style.wrapper}>
      <main className={style.main}>
        <div className={style.date}>14 апреля 2022</div>
        <h2 className={style.title}>Стиральная машина Bosch</h2>
        <div className={style.number}>WS-25645-253-55</div>
        {/* TODO: change, there were a way to add class to a component?  */}
        <ViewsNumber cname={style.views}>2 456</ViewsNumber>
        <ProductSlider cname={style.slider} />
      </main>

      <aside className={style.aside}>
        <div className={style.price}>22 500 Р</div>
        {/* TODO: google how to better set outer margin in react */}
        <div className={style.button}>
          <ShowTelButton />
        </div>
        <div className={style.more}>Смотрите также:</div>
      </aside>
    </div>
  </>
);

export default ProductPage;
