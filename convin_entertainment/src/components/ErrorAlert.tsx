import { Alert, Space } from 'antd';
import type { ErrorAlertInterface } from 'utils/_interface';

const ErrorAlert = (props: ErrorAlertInterface): JSX.Element => {
  return (
    <>
      {props.error && (
        <Space direction='vertical'>
          <Alert message='Error fetching data' type='error' showIcon closable />
        </Space>
      )}
    </>
  );
};

export default ErrorAlert;
