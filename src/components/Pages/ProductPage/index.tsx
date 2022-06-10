import React from 'react';
import CustomButton from '../../common/CustomButton';
import ProductSlider from '../ProductSlider';
import style from './ProductPage.module.scss';
import arrow from '../../../assets/images/arrow-back.svg';

const ProductPage = () => (
  <>
    <img className={style.arrow} src={arrow} alt="Arrow back" />

    <div className={style.wrapper}>
      <main className={style.main}>
        <ProductSlider />
      </main>

      <aside className={style.aside}>
        <div>PRICE</div>

        <div>Смотрите также:</div>
        <CustomButton>Показать номер</CustomButton>

      </aside>

    </div>

  </>
);

export default ProductPage;
