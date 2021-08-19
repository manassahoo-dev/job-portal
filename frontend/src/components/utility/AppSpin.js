import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function AppSpin({ loading, size, tip, children}) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <Spin tip={tip} size={size} indicator={antIcon} spinning={loading}>
            {children}
        </Spin>
    );
}
export default AppSpin;
