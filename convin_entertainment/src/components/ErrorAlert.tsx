import { Alert, Space } from 'antd';
import type { ErrorAlertInterface } from 'utils/_interface';

const ErrorAlert = (props: ErrorAlertInterface): JSX.Element => {
  return (
    <>
      {props.error[0] && (
        <Space direction='vertical'>
          <Alert message='Error fetching data' description={props.error[1]} type='error' showIcon closable />
        </Space>
      )}
    </>
  );
};

export default ErrorAlert;
