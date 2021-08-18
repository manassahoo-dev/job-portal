import { Result, Typography } from 'antd';

const { Title } = Typography;
function AppError({ title, subTitle, className }) {
    return (
        <Result
            className={className}
            status="error"
            title={<Title level={5} className="m-0">{title}</Title>}
            subTitle={subTitle}
        />
    );
}
export default AppError;
