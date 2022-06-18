import React from 'react';
import style from './Feed.module.scss';
import CustomButton from '../CustomButton';
import Cards from '../Cards';
import LoadSvg from '../svg/LoadSvg';

const Feed = () => (
  <div className={style.feedwrapper}>
    <div className={style.titleWrapper}>
      <h2 className={style.title}>Вся лента</h2>
    </div>
    <div className={style.cardsWrapper}>
      <Cards />
    </div>
    <div className={style.btnWrapper}>
      <CustomButton onClick={() => {}} buttonStyle="btn--outline">
        <LoadSvg />
        <span className={style.btnText}>
          Загрузить еще
        </span>
      </CustomButton>
    </div>
  </div>
);

export default Feed;
