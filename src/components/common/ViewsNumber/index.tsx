import React from 'react';
import style from './ViewsNumber.module.scss';

type CardPropsType = {
  children: string;
  cname: string | undefined;
};

const ViewsNumber: React.FC<CardPropsType> = ({ children, cname }) => (
  <div className={cname}>
    <div className={style.wrapper}>
      <span className={style.icon} />
      <span className={style.viewNumber}>
        {children}
      </span>
    </div>
  </div>
);

export default ViewsNumber;
