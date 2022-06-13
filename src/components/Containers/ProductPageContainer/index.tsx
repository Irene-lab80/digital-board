import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../Pages/ProductPage';
import { data } from '../../../helpers';

const ProductPageContainer = () => {
  const { title } = useParams();
  const product = data.find((el) => el.title === title);

  return <ProductPage productInfo={product} />;
};

export default ProductPageContainer;
