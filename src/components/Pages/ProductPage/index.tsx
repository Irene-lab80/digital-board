import React from 'react';
import CustomButton from '../../common/CustomButton';
import ProductSlider from '../../common/ProductSlider';
import style from './ProductPage.module.scss';
import arrow from '../../../assets/images/arrow-back.svg';
import ViewsNumber from '../../common/ViewsNumber';

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
        <div className={style.button}>
          <CustomButton buttonStyle="btn--primary">
            <span>Показать номер</span>
          </CustomButton>
          <a href="tel: +79304566569" className={style.tel}>+7 (930) 456 - 65 - 69</a>
        </div>
        <div className={style.more}>Смотрите также:</div>
      </aside>
    </div>
  </>
);

export default ProductPage;
