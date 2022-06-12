import React from 'react';
import catImage from '../../../assets/images/purr-page-not-found 1.png';
import style from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={style.page__wrapper}>
    <div className={style.page__info}>
      <p className={style.page__message_bold}>Упс! Кажется, на эту страницу прилег котик</p>
      <p className={style.page__message_error}>Ошибка 404</p>
      <p className={style.page__message}>
        Мы уже разбираемся, почему так получилось, скоро все починим.
      </p>
    </div>
    <img className={style.page__img} src={catImage} alt="Page not found cat" />
  </div>
);

export default NotFoundPage;
