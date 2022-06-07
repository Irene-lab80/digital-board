import React from 'react';
import GetPasswordForm from '../../common/GetPasswordForm';
import style from './GetPasswordPage.module.scss';

const GetPasswordPage = () => (
  <div className={style.wrapper}>
    <h2>Восстановление пароля</h2>
    <div className={style.stepsWrapper}>
      <div className={style.step}>
        <span className={style.button}>1</span>
        <span className={style.text}>
          Проверка
          почты
        </span>
      </div>
      <div className={style.step}>
        <span className={style.button}>2</span>
        <span className={style.text}>
          Восстановление
          пароля
        </span>
      </div>

    </div>
    <GetPasswordForm />
  </div>);

export default GetPasswordPage;
