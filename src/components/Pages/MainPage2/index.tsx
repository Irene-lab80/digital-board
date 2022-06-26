import React from 'react';
import CardList from '../../common/CardList';

type MainPagType = {
  productData: any[];
}

const MainPage2 = ({ productData }: MainPagType) => (
  <>
    <h1>LIST DATA</h1>
    {productData.length ? <CardList data={productData} /> : <h1>LOADING</h1>}
  </>
);

export default MainPage2;
