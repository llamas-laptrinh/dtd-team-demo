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
import Auth from "../pages/Authen";
import ForgotPassword from "../pages/ForgotPassword";
import BookingHotel from "../pages/BookingHotel";
import BookCombo from "../pages/BookCombo";
import DetailTour from "../pages/DetailTour";
import BookTickets from "../pages/bookTicket/BookTickets";
import ChuyenDi from "../pages/bookTicket/ChuyenDi";
import Booking from "../pages/bookTicket/Booking";
import News from "../pages/New/News";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bookinghotel" element={<BookingHotel />} />
        <Route path="/bookcombo" element={<BookCombo />} />
        <Route path="/detailtour" element={<DetailTour />} />
        <Route path="/bookTicket" element={<BookTickets />} />
        <Route path="/Chuyen-Di" element={<ChuyenDi />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Home/" element={<Layout />}>
          <Route path="news" element={<News />} />
          <Route path="Intro" element={<Intro />} />
        </Route>
        <Route path="/Setting/" element={<Setting />}>
          <Route index element={<PersonalInformationSetting />} />
          <Route path="Options" element={<OptionsSetting />} />
          <Route path="Safety" element={<Safety />} />
          <Route path="Billing" element={<BillingSetting />} />
          <Route path="Privacy" element={<PrivacySetting />} />
          <Route path="Email" element={<EmailSetting />} />
          <Route path="Companion" element={<CompanionSetting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
