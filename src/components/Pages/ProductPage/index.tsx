import React from 'react';
import CustomButton from '../../common/CustomButton';
import ProductSlider from '../ProductSlider';
import style from './ProductPage.module.scss';

const ProductPage = () => (
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
);

export default ProductPage;
