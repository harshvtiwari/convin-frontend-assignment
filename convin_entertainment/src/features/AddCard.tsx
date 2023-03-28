import { Button, Card } from 'antd';
import './styles.css';

const AddCard = () => {
  return (
    <Card title='Add new card' bordered={false}>
      <div className='add_card_wrapper'>
        <div className='bucket_info'>
          <label htmlFor='bucket'>Bucket Name</label>
          <input type='text' name='bucket' />
        </div>
        <div className='card_info'>
          <div>
            <label htmlFor='card_title'>Card Title</label>
            <input type='text' name='card_title' />
          </div>
          <div>
            <label htmlFor='media_link'>Media link</label>
            <input type='text' name='media_link' />
          </div>
        </div>
        <Button type='primary'>Add</Button>
      </div>
    </Card>
  );
};

export default AddCard;
