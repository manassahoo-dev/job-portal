import { Empty } from "antd";

function AppEmpty({ name }) {
    return (
        <Empty
            className="vh65 card-center bg-white"
            description={`No ${name} found`}>
        </Empty>
    )
}
export default AppEmpty;