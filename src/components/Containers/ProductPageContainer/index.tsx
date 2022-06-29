import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { GetProductsAction } from '../../../store/products/actions';
import { getProducts } from '../../../store/products/selectors';
import ProductPage from '../../Pages/ProductPage';

const ProductPageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: remove ts-ignore?
    // @ts-ignore
    dispatch(GetProductsAction());
  }, []);

  const productData = useSelector(getProducts);

  const { id } = useParams();
  const product = productData.find((el) => el.id.toString() === id);

  return <ProductPage productInfo={product} />;
};

export default ProductPageContainer;
