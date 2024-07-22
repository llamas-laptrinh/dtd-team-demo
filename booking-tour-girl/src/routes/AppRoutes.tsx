import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Intro from "../pages/Intro/Intro";
import Layout from "../pages/Layout";
import Setting from "../pages/Setting";
import PersonalInformationSetting from "../pages/Setting/Personal_Information";
import OptionsSetting from "../pages/Setting/Options";
import Safety from "../pages/Setting/Safety";
import BillingSetting from "../pages/Setting/Billing";
import PrivacySetting from "../pages/Setting/Privacy";
import EmailSetting from "../pages/Setting/Email";
import CompanionSetting from "../pages/Setting/Companion";
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home/" element={<Layout />}>
                    <Route path='Intro' element={<Intro />} />
                </Route>
                <Route path='/Setting/' element={<Setting />} >
                    <Route index element={<PersonalInformationSetting />} />
                    <Route path='Options' element={<OptionsSetting />} />
                    <Route path='Safety' element={<Safety />} />
                    <Route path='Billing' element={<BillingSetting />} />
                    <Route path='Privacy' element={<PrivacySetting />} />
                    <Route path='Email' element={<EmailSetting />} />
                    <Route path='Companion' element={<CompanionSetting />} />

                </Route>
            </Routes>
        </BrowserRouter >
    );
};
