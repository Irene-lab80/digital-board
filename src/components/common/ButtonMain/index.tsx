import React from 'react';
import style from './ButtonMain.module.scss';

type ButtonPropsType = {
  buttonTitle: string;
};

const ButtonMain = ({ buttonTitle }: ButtonPropsType) => (
  <button className={style.button} type="button">
    <span className={style.icon} />
    {buttonTitle}
  </button>
);

export default ButtonMain;
