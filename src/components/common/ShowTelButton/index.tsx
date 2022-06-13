import React, { useState } from 'react';
import CustomButton from '../CustomButton';

const ShowTelButton = () => {
  const [NumberVisible, setNumberVisible] = useState(false);
  const handler = () => {
    setNumberVisible((prev) => !prev);
  };

  return (
    <>
      <CustomButton onClick={handler} buttonStyle="btn--primary">
        <span>{NumberVisible ? 'Скрыть номер' : 'Показать номер'}</span>
      </CustomButton>
      {/* TODO: Стили в мейне?? Ширина кнопки разная? */}
      <a href="tel: +79304566569" className={NumberVisible ? 'tel_visible' : 'tel_hidden'} id="tel-number">+7 (930) 456 - 65 - 69</a>
    </>
  );
};

export default ShowTelButton;
