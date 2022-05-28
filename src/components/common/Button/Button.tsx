import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  buttonTitle: string;
};

const Button = ({ buttonTitle }: ButtonPropsType) => (
  <button className={style.button} type="button">
    {buttonTitle}
  </button>
);

export default Button;
