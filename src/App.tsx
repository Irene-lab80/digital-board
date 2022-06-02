import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './components/Containers/AuthContainer';
import RegistrationContainer from './components/Containers/RegistrationContainer';
import NotFoundContainer from './components/Containers/NotFoundContainer';
import MainPageContainer from './components/Containers/MainPageContainer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainPageContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<NotFoundContainer />} />
      </Route>
    </Routes>
  </div>
);

export default App;
