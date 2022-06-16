import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';
import BackArrowSvg from '../../common/svg/BackArrowSvg';
import style from './EditAdPage.module.scss';

const EditAdPage = () => (
  <div className={style.wrapper}>
    <nav className={style.nav}>Админ меню</nav>
    <div className={style.mainWrapper}>
      <Link to="/">
        <div className={style.backBtn}>
          <BackArrowSvg />
          <div className={style.backBtnText}>Вернуться назад</div>
        </div>
      </Link>
      <main className={style.main}>
        <div className={style.top}>
          <h2 className={style.title}>Чепчик</h2>
          <div className={style.btnWrapper}>
            <CustomButton buttonStyle="btn--primary" onClick={() => {}}>
              Сохранить
            </CustomButton>
          </div>
        </div>
        <div className={style.form}>
          123
        </div>
      </main>
    </div>
  </div>
);

export default EditAdPage;
