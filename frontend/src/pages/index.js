import { Typography, Row, Col, Card, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import routes from '../routes';

const { Title, Text } = Typography;

function Home() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        
        <div className="text-center vh65 card-center">
            {/* <Title className="m-0">United Way Hyderabad</Title>
            <Title level={5} className="mb-4">United Way Hyderabad improves lives by mobilizing the caring power of communities to advance the common good.</Title>

            <Row gutter={[16, 16]}>{routes.map((route, idx) => (
                <Col xs={12} sm={8} md={6}><Link to={route.path}><Card><Title level={3}>{route.name}</Title></Card></Link></Col>
            ))}
            </Row> */}

            {!user ?
                <Redirect to="/login" />
                :
                <></>
            }
        </div>
    );
}
export default Home;
