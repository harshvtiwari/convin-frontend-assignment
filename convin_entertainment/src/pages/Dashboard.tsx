import { Col, Row } from 'antd';
import Bucket from 'components/Bucket';
import ErrorAlert from 'components/ErrorAlert';
import Navbar from 'components/Navbar';
import AddCard from 'features/AddCard';
import useGetData from 'hooks/useGetData';
import { useCallback, useMemo } from 'react';
import './styles.css';

const Dashboard = () => {
  const { buckets, loading, error } = useGetData('./data.json');
  const renderBucketList = useCallback((): JSX.Element[] => {
    return Object.entries(buckets).map(([key, value], index) => (
      <Col span={12} key={index}>
        <Bucket bucketTitle={key} bucketCards={value} />
      </Col>
    ));
  }, [buckets]);
  const bucketCols = useMemo(() => renderBucketList(), [renderBucketList]);
  const gap = 10;
  return (
    <div className='main'>
      <Navbar />
      <div className='dashboard_wrapper'>
        <ErrorAlert error={error} />
        <AddCard />
        {loading ? 'Loading...' : <Row gutter={[gap, gap]}>{bucketCols}</Row>}
      </div>
    </div>
  );
};

export default Dashboard;
