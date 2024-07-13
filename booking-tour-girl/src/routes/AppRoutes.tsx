import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Intro from "../pages/Intro/Intro";
import Layout from "../pages/Layout";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='/Intro' element={<Intro />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
};
