import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Intro from "../pages/Intro/Intro";
import Layout from "../pages/Layout";
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
        <Route path="/" element={<Layout />}>
          <Route path="/Intro" element={<Intro />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/bookinghotel" element={<BookingHotel />} />
          <Route path="/bookcombo" element={<BookCombo />} />
          <Route path="/detailtour" element={<DetailTour />} />
          <Route path="/bookTicket" element={<BookTickets />} />
          <Route path="/Chuyen-Di" element={<ChuyenDi />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
