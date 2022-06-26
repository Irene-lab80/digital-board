import React, { useEffect } from 'react';
import makeRequest from '../../../network';
import MainPage2 from '../../Pages/MainPage2';

const MainPageContainer2 = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({ url: '/products' });
      console.log(data);
    };
    getData();
  }, []);
  // useEffect(() => {
  //   makeRequest({ url: '/products' });
  // }, []);

  return <MainPage2 />;
};

export default MainPageContainer2;
