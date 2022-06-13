import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomButton from '../CustomButton';

// type ModalBtnProps = {
//   children: Element[];
//   title: string;
//   visible: boolean;
//   onOk: () => void;
//   onCancel: () => void;
// }

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

  // TODO: add children props, ts doesnt work?
  return (
    <>
      <CustomButton onClick={showModal} buttonStyle="btn--accent">Подать объявление</CustomButton>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />
    </>
  );
};

export default ModalBtn;
