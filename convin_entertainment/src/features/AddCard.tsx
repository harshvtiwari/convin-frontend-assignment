import { Button, Card, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import type { AddCardInterface } from 'utils/_interface';
import './styles.css';

const AddCard = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (values: AddCardInterface) => {
      setLoading(true);
      try {
        // TODO: Submit form values to server
        form.resetFields();
      } catch (err) {}
      setLoading(false);
    },
    [form],
  );

  return (
    <Card title='Add new card' bordered={false}>
      <Form form={form} onFinish={handleSubmit}>
        <div className='add_card_wrapper'>
          <Form.Item className='add_card_label' name='bucket' label='Bucket Name' rules={[{ required: true }]}>
            <Input className='add_card_input' />
          </Form.Item>
          <div className='card_info'>
            <Form.Item className='add_card_label' name='cardTitle' label='Card Title' rules={[{ required: true }]}>
              <Input className='add_card_input' />
            </Form.Item>
            <Form.Item className='add_card_label' name='mediaLink' label='Media link' rules={[{ required: true }]}>
              <Input className='add_card_input' />
            </Form.Item>
          </div>
          <Button type='primary' htmlType='submit' loading={loading}>
            Add
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddCard;
