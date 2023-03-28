import { Row, Col, theme, Layout } from 'antd';
import './styles.css';

const { Header, Content, Footer, Sider } = Layout;

const Login = () => {
  return (
    <Row>
      <Col span={10} className='login_brand_info'>
        <div>
          <span>CONVIN</span>
          <span>.AI</span>
        </div>
      </Col>
      <Col span={14} className='auth_wrapper'>
        LOGIN
      </Col>
    </Row>
  );
};

export default Login;
