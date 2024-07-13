import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Layout;