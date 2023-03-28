import { DeleteOutlined, EditOutlined, RetweetOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import type { ActionType } from 'utils/_interface';

const MediaCardIcons = (props: {
  setModalState: (state: boolean) => void;
  setActionType: (type: ActionType) => void;
}) => {
  return (
    <div className='media_action_icons'>
      <Tooltip title='Edit'>
        <EditOutlined
          onClick={() => {
            props.setModalState(true);
            props.setActionType('edit');
          }}
        />
      </Tooltip>
      <Tooltip title='Move'>
        <RetweetOutlined
          onClick={() => {
            props.setModalState(true);
            props.setActionType('move');
          }}
        />
      </Tooltip>
      <Tooltip title='Delete'>
        <DeleteOutlined
          onClick={() => {
            props.setModalState(true);
            props.setActionType('delete');
          }}
        />
      </Tooltip>
    </div>
  );
};

export default MediaCardIcons;
