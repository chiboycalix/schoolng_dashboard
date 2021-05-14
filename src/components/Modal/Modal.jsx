import React from 'react';
import { Modal } from 'antd'

const ModalComponent = (props) => {
  return (
    <Modal
      visible={props?.visible}
      title={props?.title}
      onOk={props?.handleOk}
      onCancel={props?.handleCancel}
      width={props?.width}
      footer={props?.footer}
      centered={props?.centered}
      destroyOnClose={props?.destroyOnClose}
    >
      {props?.children}
    </Modal>
  )
}
export default ModalComponent
