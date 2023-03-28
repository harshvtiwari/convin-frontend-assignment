import { Modal } from 'antd';
import React, { useState } from 'react';
import type { ActionInterface } from 'utils/_interface';
import DeleteCard from './DeleteCard';
import EditCard from './EditCard';
import ModalFooter from './ModalFooter';
import MoveCard from './MoveCard';

const CardActions = React.memo((props: ActionInterface) => {
  const [footerStatus, setFooterStatus] = useState(false);
  return (
    <>
      {props.modalState && (
        <Modal
          centered
          open={props.modalState}
          footer={footerStatus ? <ModalFooter /> : null}
          onCancel={() => {
            props.setModalState(false);
          }}>
          {props.actionType === 'video' && <iframe src={props.actionData?.link} />}
          {props.actionType === 'edit' && <EditCard setFooterStatus={setFooterStatus} data={props.data} />}
          {props.actionType === 'move' && <MoveCard setFooterStatus={setFooterStatus} />}
          {props.actionType === 'delete' && <DeleteCard setFooterStatus={setFooterStatus} />}
        </Modal>
      )}
    </>
  );
});

CardActions.displayName = 'CardActions';
export default CardActions;
