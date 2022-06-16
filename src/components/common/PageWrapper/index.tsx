import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './PageWrapper.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
