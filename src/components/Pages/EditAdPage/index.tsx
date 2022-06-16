import React from 'react';
import CustomButton from '../../common/CustomButton';
import style from './EditAdPage.module.scss';
import 'antd/dist/antd.css';
import EditAdFrom from '../../common/EditAdFrom';
import GoBackBtn from '../../common/GoBackBtn';

const EditAdPage = () => (
  <div className={style.wrapper}>
    <nav className={style.nav}>Админ меню</nav>
    <div className={style.mainWrapper}>
      <GoBackBtn>
        Вернуться назад
      </GoBackBtn>
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
          <EditAdFrom />
        </div>
      </main>
    </div>
  </div>
);

export default EditAdPage;
