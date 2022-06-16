import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './PageWrapper.module.scss';
import Footer from '../Footer/Footer';
import HeaderAdmin from '../HeaderAdmin';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <HeaderAdmin />
    <main className={style.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
