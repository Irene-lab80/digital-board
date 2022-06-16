import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomButton from '../CustomButton';

const ModalBtn: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <CustomButton onClick={showModal} buttonStyle="btn--accent">Подать объявление</CustomButton>
      {/* @ts-ignore this lib is incompatible with react18 */}
      <Modal title="Действие недоступно" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Для подачи объявления необходимо
        {' '}
        <a href="/reg">зарегистрироваться</a>
        {' '}
        или
        {' '}
        <a href="/auth">авторизоваться</a>
        .
      </Modal>
    </>
  );
};

export default ModalBtn;
