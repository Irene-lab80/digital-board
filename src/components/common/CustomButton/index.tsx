import React from 'react';

type PropsType = {
  children: React.ReactNode;
  buttonStyle: string;
  onClick: () => void
}

const STYLES = ['btn--primary', 'btn--outline', 'btn--accent'];

const CustomButton: React.FC<PropsType> = ({ children, buttonStyle, onClick }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button className={`btn ${checkButtonStyle}`} type="button" onClick={onClick}>{children}</button>
  );
};

export default CustomButton;
