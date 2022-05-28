import React from 'react';
import style from './PageWrapper.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { Outlet } from 'react-router-dom';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
      <h1>content</h1>
      {/* <Outlet /> */}
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
