import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowSvg from '../svg/BackArrowSvg';
import style from './GoBackBtn.module.scss';

type GoBackBtnType = {
  children: string;
}

const GoBackBtn:React.FC<GoBackBtnType> = ({ children }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button className={style.wrapper} type="button" onClick={goBack}>
      <BackArrowSvg />
      <span className={style.title}>{children}</span>
    </button>
  );
};

export default GoBackBtn;
