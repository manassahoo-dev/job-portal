import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function AppSpin({ loading, children}) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <Spin tip="Loading..." indicator={antIcon} spinning={loading}>
            {children}
        </Spin>
    );
}
export default AppSpin;
