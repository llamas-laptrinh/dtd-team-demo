import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Setting: React.FC = () => {
    return (<div className="">
        <Header></Header>
        <Outlet />
        <Footer />
    </div>)
}
export default Setting;