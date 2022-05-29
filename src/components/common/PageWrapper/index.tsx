import React from 'react';
import AuthPage from '../../Pages/AuthPage';
import RegistrationPage from '../../Pages/RegistrationPage';
import style from './PageWrapper.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { Outlet } from 'react-router-dom';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
      <h1>content</h1>
      <AuthPage />
      <RegistrationPage />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
