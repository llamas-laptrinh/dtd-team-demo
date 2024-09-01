import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    return (
        <div className="">
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
};

export default AdminLayout;