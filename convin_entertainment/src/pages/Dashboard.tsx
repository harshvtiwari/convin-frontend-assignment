import { Alert, Col, Row, Space } from 'antd';
import Bucket from 'components/Bucket';
import ErrorAlert from 'components/ErrorAlert';
import AddCard from 'features/AddCard';
import useGetData from 'hooks/useGetData';
import { useCallback, useMemo } from 'react';
import './styles.css';

const Dashboard = () => {
  const [data, error] = useGetData();
  const renderBucketList = useCallback((): JSX.Element[] => {
    return Object.entries(data).map(([key, value], index) => (
      <Col span={12} key={index}>
        <Bucket bucketTitle={key} bucketCards={value} />
      </Col>
    ));
  }, [data]);
  const bucketCols = useMemo(() => renderBucketList(), [renderBucketList]);
  return (
    <div className='dashboard_wrapper'>
      <ErrorAlert error={error} />
      <AddCard />
      <Row gutter={[10, 10]}>{bucketCols}</Row>
    </div>
  );
};

export default Dashboard;
