import React from 'react';
import style from './ViewsNumber.module.scss';

type CardPropsType = {
  children: string;
};

const ViewsNumber: React.FC<CardPropsType> = ({ children }) => (
  <div className={style.views}>
    <span className={style.icon} />
    <span className={style.viewNumber}>
      {children}
    </span>
  </div>
);

export default ViewsNumber;
