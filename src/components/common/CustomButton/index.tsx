import React from 'react';

type PropsType = {
  children: React.ReactNode;
  buttonStyle: string;
}

const click = () => {
  alert('Clicked!');
};

const STYLES = ['btn--primary', 'btn--outline', 'btn--accent'];

const CustomButton: React.FC<PropsType> = ({ children, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button className={`btn ${checkButtonStyle}`} type="button" onClick={click}>{children}</button>
  );
};

export default CustomButton;
