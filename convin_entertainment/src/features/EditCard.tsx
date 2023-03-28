import { Card, Form, Input } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import type { EditCardInterface } from 'utils/_interface';

const EditCard = (props: EditCardInterface) => {
  const { setFooterStatus } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setFooterStatus(true);
    return () => {
      setFooterStatus(false);
    };
  }, [setFooterStatus]);

  const handleSubmit = useCallback(
    async (values: EditCardInterface) => {
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
    <div className='edit_card_wrapper'>
      {!loading && (
        <Card title='Update card' bordered={false}>
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
            </div>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default EditCard;
