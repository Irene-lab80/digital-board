import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './components/Containers/AuthContainer';
import RegistrationContainer from './components/Containers/RegistrationContainer';
import NotFoundContainer from './components/Containers/NotFoundContainer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<h1>MAIN PAGE</h1>} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<NotFoundContainer />} />
      </Route>
    </Routes>
  </div>
);

export default App;
