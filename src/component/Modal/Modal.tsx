import React from "react";
import { Modal } from "antd";
import { setCloseModal } from "../../Redux/slice/homeSlice";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
const ModalHome: React.FC = () => {
  const { openModal } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const handleOk = () => {
    dispatch(setCloseModal());
  };

  const handleCancel = () => {
    dispatch(setCloseModal());
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalHome;
