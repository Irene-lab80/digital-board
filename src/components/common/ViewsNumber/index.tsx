import React from 'react';
import EyeSvg from '../svg/EyeSvg';
import style from './ViewsNumber.module.scss';

type CardPropsType = {
  children: string | undefined;
  cname: string | undefined;
};

const ViewsNumber: React.FC<CardPropsType> = ({ children, cname }) => (
  <div className={cname}>
    <div className={style.wrapper}>
      <EyeSvg />
      <span className={style.viewNumber}>
        {children}
      </span>
    </div>
  </div>
);

export default ViewsNumber;
