import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
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

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/digital-board/" element={<PageWrapper />}>
        <Route index element={<MainPageContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="get-pass" element={<GetPasswordContainer />} />
        <Route path="my-ads" element={<AuthHoc><MyAdsPageContainer /></AuthHoc>} />
        <Route path="edit-ad" element={<AuthHoc><EditAdPageContainer /></AuthHoc>} />
        <Route path="product/:id" element={<ProductPageContainer />} />
        <Route path="*" element={<NotFoundContainer />} />
      </Route>
    </Routes>
  </div>
);

export default App;
