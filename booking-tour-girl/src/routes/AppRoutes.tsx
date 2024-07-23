import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Intro from "../pages/Intro/Intro";
import Layout from "../pages/Layout";
import BookTickets from "../pages/bookTicket/BookTickets";
import ChuyenDi from "../pages/bookTicket/ChuyenDi";
import Booking from "../pages/bookTicket/Booking";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Intro" element={<Intro />} />
          <Route path="/bookTicket" element={<BookTickets />} />
          <Route path="/Chuyen-Di" element={<ChuyenDi />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
