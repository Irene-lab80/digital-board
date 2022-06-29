/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './components/Containers/AuthContainer';
import RegistrationContainer from './components/Containers/RegistrationContainer';
import NotFoundContainer from './components/Containers/NotFoundContainer';
import GetPasswordContainer from './components/Containers/GetPasswordContainer';
import ProductPageContainer from './components/Containers/ProductPageContainer';
import MyAdsPageContainer from './components/Containers/MyAdsPageContainer';
import EditAdPageContainer from './components/Containers/EditAdPageContainer';
import AuthHoc from './components/HOC/AuthHoc';
import './assets/styles/main.scss';
import MainPageContainer from './components/Containers/MainPageContainer';
import SeachResultsPageContainer from './components/Containers/SeachResultsPageContainer';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {
        loading
          ? <div
              className="lds-dual-ring"
              style={{ position: 'absolute',
                top: '50%',
                left: '50%' }} />
          : <Routes>
            <Route path="/" element={<PageWrapper />}>
              <Route path="main" element={<MainPageContainer />} />
              <Route index element={<MainPageContainer />} />
              <Route path="auth" element={<AuthContainer />} />
              <Route path="reg" element={<RegistrationContainer />} />
              <Route path="get-pass" element={<GetPasswordContainer />} />
              <Route path="my-ads" element={<AuthHoc><MyAdsPageContainer /></AuthHoc>} />
              <Route path="edit-ad" element={<AuthHoc><EditAdPageContainer /></AuthHoc>} />
              <Route path="search" element={<SeachResultsPageContainer />} />
              <Route path="product/:id" element={<ProductPageContainer />} />
              <Route path="*" element={<NotFoundContainer />} />
            </Route>
            </Routes>
      }
    </div>
  );
};

export default App;
