import CardActions from 'features/CardActions';
import { useState } from 'react';
import type { ActionType, MediaCardInterface } from 'utils/_interface';
import MediaCardIcons from './MediaCardIcons';

import './styles.css';

const MediaCard = (props: MediaCardInterface) => {
  const { bucket, name, link, mediaType } = props;
  const [modalState, setModalState] = useState<boolean>(false);
  const [actionType, setActionType] = useState<ActionType>();
  const data = { bucketTitle: bucket, cardTitle: name, cardLink: link };
  return (
    <div className='media_card_wrapper'>
      <div className='media_card_info'>
        <div className='media_title'>{name}</div>
        <MediaCardIcons setModalState={setModalState} setActionType={setActionType} />
      </div>
      <span
        className='media_link'
        onClick={() => {
          setModalState(true);
          setActionType('video');
        }}>
        Click here for {mediaType}
      </span>
      <CardActions
        actionType={actionType ?? 'none'}
        modalState={modalState}
        setModalState={setModalState}
        actionData={props}
        data={data}
      />
    </div>
  );
};

export default MediaCard;
