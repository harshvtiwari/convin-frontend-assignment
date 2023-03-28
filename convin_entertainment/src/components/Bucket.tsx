import { Collapse } from 'antd';
import React from 'react';
import type { BucketPropsInterface } from 'utils/_interface';
import MediaCard from './MediaCard';

const { Panel } = Collapse;

const Bucket = (props: BucketPropsInterface) => {
  const { bucketTitle, bucketCards } = props;
  return (
    <Collapse size='small'>
      <Panel header={bucketTitle} key='1'>
        <div className='bucket_cards_list'>
          {bucketCards.map((card, index) => {
            return <MediaCard name={card.name} link={card.link} mediaType='video' key={index} bucket={bucketTitle} />;
          })}
        </div>
      </Panel>
    </Collapse>
  );
};

export default React.memo(Bucket);
