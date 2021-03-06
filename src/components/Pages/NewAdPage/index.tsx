import React from 'react';
import style from './NewAdPage.module.scss';
import 'antd/dist/antd.min.css';
import EditAdFrom from '../../common/EditAdFrom';
import GoBackBtn from '../../common/GoBackBtn';
import ProfileMenu from '../../common/ProfileMenu';

const NewAdPage = () => (
  <div className="page-wrapper">
    <div className={style.wrapper}>
      <div className={style.profileMenu}>
        <ProfileMenu />
      </div>
      <div className={style.mainWrapper}>
        <GoBackBtn>
          Вернуться назад
        </GoBackBtn>
        <main className={style.main}>
          {/* <div className={style.top}>
          <h2 className={style.title}>Чепчик</h2>
          <div className={style.btnWrapper}>
            <CustomButton buttonStyle="btn--primary" onClick={() => {}}>
              Сохранить
            </CustomButton>
          </div>
        </div> */}
          <div className={style.form}>
            <EditAdFrom />
          </div>
        </main>
      </div>
    </div>
  </div>
);

export default NewAdPage;
