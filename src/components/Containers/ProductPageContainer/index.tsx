import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../Pages/ProductPage';
import { data } from '../../../helpers';

const ProductPageContainer = () => {
  const { id } = useParams();
  const product = data.find((el) => el.id.toString() === id);

  return <ProductPage productInfo={product} />;
};

export default ProductPageContainer;
