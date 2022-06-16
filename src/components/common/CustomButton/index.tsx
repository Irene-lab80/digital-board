import React from 'react';
import style from './CustomButton.module.scss';

type PropsType = {
  children: React.ReactNode;
  buttonStyle: string;
  onClick: () => void
}

const STYLES = ['btn--primary', 'btn--outline', 'btn--accent'];

const CustomButton: React.FC<PropsType> = ({ children, buttonStyle, onClick }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button className={`btn ${checkButtonStyle}`} type="button" onClick={onClick}>
      <span className={style.title}>{children}</span>
    </button>
  );
};

export default CustomButton;
