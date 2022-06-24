/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './components/Containers/AuthContainer';
import RegistrationContainer from './components/Containers/RegistrationContainer';
import NotFoundContainer from './components/Containers/NotFoundContainer';
import MainPageContainer from './components/Containers/MainPageContainer';
import GetPasswordContainer from './components/Containers/GetPasswordContainer';
import ProductPageContainer from './components/Containers/ProductPageContainer';
import MyAdsPageContainer from './components/Containers/MyAdsPageContainer';
import EditAdPageContainer from './components/Containers/EditAdPageContainer';
import AuthHoc from './components/HOC/AuthHoc';
import './assets/styles/main.scss';
import SeachResultsPage from './components/Pages/SeachResultsPage';

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
          ? <ClipLoader loading={loading} css="margin: 40vh 45vw" size={100} color="#1d42be" speedMultiplier={1.5} />
          : <Routes>
            <Route path="/" element={<PageWrapper />}>
              <Route index element={<MainPageContainer />} />
              <Route path="auth" element={<AuthContainer />} />
              <Route path="reg" element={<RegistrationContainer />} />
              <Route path="get-pass" element={<GetPasswordContainer />} />
              <Route path="my-ads" element={<AuthHoc><MyAdsPageContainer /></AuthHoc>} />
              <Route path="edit-ad" element={<AuthHoc><EditAdPageContainer /></AuthHoc>} />
              <Route path="search" element={<SeachResultsPage />} />
              <Route path="product/:id" element={<ProductPageContainer />} />
              <Route path="*" element={<NotFoundContainer />} />
            </Route>
            </Routes>
      }
    </div>
  );
};

export default App;
