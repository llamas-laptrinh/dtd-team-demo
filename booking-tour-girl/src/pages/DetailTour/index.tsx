import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TourInfo from '../../components/TourInfo';
import Contacts from '../../components/Contacts';
import RelatedTours from '../../components/RelatedTours'; 
import ImgTour1 from '../../assets/imgs/DetailTours/tour-du-lich-tan-cuong-trung-quoc-9n9d-1 (1).jpg';
import ImgTour2 from '../../assets/imgs/DetailTours/tour-du-lich-tan-cuong-trung-quoc-9n9d-1.jpg';
import ImgTour3 from '../../assets/imgs/DetailTours/tour-du-lich-tan-cuong-trung-quoc-9n9d-11.jpg';
import ImgTour4 from '../../assets/imgs/DetailTours/tour-du-lich-tan-cuong-trung-quoc-9n9d-4.jpg';
import ImgTour5 from '../../assets/imgs/DetailTours/tour-du-lich-tan-cuong-trung-quoc-9n9d-6.jpg';
import ReviewForm from '../../components/ReviewForm';
import LatestPosts from '../../components/LatestPosts';
import HotelFlightCombos from '../../components/HotelFlightCombos';
import './styles.css';

const DetailTour: React.FC = () => {

  const hotelFlightCombos = [
    "Du lịch Hà Nội", 
    "Du lịch Hạ Long",
     "Du lịch Sapa", "Du lịch Hà Giang", "Du lịch Ninh Bình",
  "Du lịch Mộc Châu", "Du lịch Hải Phòng", "Du lịch TP. Hồ Chí Minh", "Du lịch Vũng Tàu", "Du lịch Miền Tây",
  "Du lịch Cần Thơ", "Du lịch Phú Quốc", "Du lịch Nam Du", "Du lịch Côn Đảo", "Du lịch Hè Lễ 30/4",
  "Du lịch Đà Nẵng", "Du lịch Huế", "Du lịch Hội An", "Du lịch Quảng Bình", "Du lịch Lý Sơn",
  "Du lịch Phú Yên", "Du lịch Quy Nhơn", "Du lịch Phan Thiết", "Du lịch Ninh Thuận", "Du lịch Nha Trang",
  "Du lịch Bình Ba", "Du lịch Bình Hưng", "Du lịch Buôn Mê Thuột", "Du lịch Đà Lạt", "Dịch vụ xe đưa đón",
  "Du lịch Châu Á", "Du lịch Thái Lan", "Du lịch Campuchia", "Du lịch Lào", "Du lịch Malaysia",
  "Du lịch Indonesia", "Du lịch Myanmar", "Du lịch Singapore", "Du lịch Philippines", "Du lịch Hàn Quốc",
  "Du lịch Nhật Bản", "Du lịch Đài Loan", "Du lịch trăng mật", "Free and Easy", "Khách đoàn - MICE - Team Building",
  "Du lịch Châu Âu", "Du lịch Pháp", "Du lịch Đức", "Du lịch Nga", "Du lịch Hà Lan",
  "Du lịch Mỹ", "Du lịch Úc", "Du lịch Ấn Độ", "Du lịch Dubai", "Du lịch Maldives",
  "Du lịch Trung Quốc", "Du lịch Hồng Kông", "Du lịch mùa Lễ hội", "Du lịch Phượng Hoàng Cổ Trấn"
  ];

  const tourData = {
    title: 'Tour du lịch Tân Cương Trung Quốc 9 ngày 9 đêm – Con đường tơ lụa: Khám phá thảo nguyên ngày hè',
    images: [
      ImgTour1,
      ImgTour2,
      ImgTour3,
      ImgTour4,
      ImgTour5,
    ],
    location: 'Hồ Chí Minh',
    duration: '9 ngày 9 đêm',
    code: 'TOHCMTROQ-MBHE-505597',
    departureDates: ['25/07', '20/08'],
    transport: 'Máy bay',
    highlights: [
      'Hòa Diễm Sơn',
      'Hẻm núi Dushanzi',
      'Khu bảo tồn Kanas',
      'Thảo nguyên xanh mát Nalati',
      'Phế tích thành cổ Giao Hà',
      'Công trình nhà máy điện gió Turpan',
      'Hành trình con đường Tơ Lụa cổ xưa',
    ],
    description: 'Tour du lịch Tân Cương Trung Quốc 9 ngày 9 đêm sẽ mang quý khách đến với vùng đất hoang sơ, rộng lớn và kỳ bí bậc nhất Trung Quốc.',
    contactInfo: 'Hãy nhanh tay gọi ngay hotline 1900 3398 của Vietnam Booking để có cơ hội đặt tour giá ưu đãi và tận hưởng vẻ đẹp hùng vĩ của Tân Cương ngát xanh!',
    tourProgram: 'Chương trình tour chi tiết sẽ được cập nhật sau.',
    servicesIncluded: 'Bao gồm bảo hiểm, bữa ăn, hướng dẫn viên, xe đưa đón, vé tham quan.',
    regulations: 'Quy định và điều khoản sẽ được cập nhật trong lần đặt tour.',
    originalPrice: '9,477,000 VND',
    discountedPrice: '7,290,000',
    departureDate: '2024-07-20',
    guestCount: '01 Khách',
    hotlineNumber: '1900 3398',
    contacts: [
      { name: 'Ms. Nghiệp (Tour Đoàn)', phone: '0935 334 174' },
      { name: 'Ms. Linh Đan', phone: '0901 196 164' },
      { name: 'Ms. Chang Thanh', phone: '0903 328 164' },
      { name: 'Ms. Phương Quỳnh', phone: '0931 119 254' },
      { name: 'Ms. Cẩm Huệ', phone: '0901 858 192' },
      { name: 'Ms. Bảo Anh', phone: '0901 996 174' },
      { name: 'Ms. Thanh Kiều', phone: '0901 966 190' },
      { name: 'Ms. Trúc Phương', phone: '0931 781 654' },
    ],
    relatedTours: [
      {
        image: ImgTour1,
        title: 'Tour Làng Hoa Sa Đéc 2N1Đ | Hành hương Châu Đốc',
        price: '1,899,000 VND',
        departure: 'Liên hệ'
      },
      {
        image: ImgTour2,
        title: 'Tour Hòn Sơn Nam Du 3 ngày 2 đêm | Châu Đốc – KDL Làng Bè – Quán Bia',
        price: '2,099,000 VND',
        departure: 'Thứ 6 hàng tuần & 30/04'
      },
      {
        image: ImgTour3,
        title: 'Tour Miền Tây – Phú Quốc khách đoàn 7N6Đ: Tiền Giang – Sóc Trăng – Cần Thơ – Phú Quốc',
        price: '5,790,000 VND',
        departure: 'Theo yêu cầu'
      },
      {
        image: ImgTour4,
        title: 'Tour Miền Tây 4 ngày 3 đêm từ Cần Thơ: Sóc Trăng – Bạc Liêu – Cà Mau – An Giang',
        price: '4,190,000 VND',
        departure: 'Thứ 5 hàng tuần'
      },
      {
        image: ImgTour5,
        title: 'Tour du lịch TPHCM – Đồng Tháp 1 ngày | KDL Xẻo Quýt – Vườn Ca Cao',
        price: '799,000 VND',
        departure: 'Chủ nhật hàng tuần'
      },
    ],
    latestPosts: [
      {
        title: 'Tour Hà Giang 3N2Đ Cột Cờ Lũng Cú Sông Nho Quế',
        link: '#'
      },
      {
        title: 'Tour Singapore 3N2Đ | Merlion Park – Garden By The Bay – Đảo Sentosa',
        link: '#'
      },
      {
        title: 'Tour Hoa Lư – Tam Cốc – Hang Múa 1 Ngày: Trải Nghiệm Di Sản Thế Giới',
        link: '#'
      },
      {
        title: 'Tour Đà Nẵng Bà Nà Hội An Rừng Dừa Bảy Mẫu 4N3Đ',
        link: '#'
      },
      {
        title: 'Tour Mỹ Tho Bến Tre Cần Thơ Cà Mau 3N2Đ | Cù Lao Thới Sơn – Chợ Nổi Cái Răng – Đất Mũi Cà Mau',
        link: '#'
      }
    ],
  };

  return (
    <Container className='detail-container'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TourInfo
            title={tourData.title}
            images={tourData.images}
            location={tourData.location}
            duration={tourData.duration}
            code={tourData.code}
            departureDates={tourData.departureDates}
            transport={tourData.transport}
            highlights={tourData.highlights}
            description={tourData.description}
            contactInfo={tourData.contactInfo}
            tourProgram={tourData.tourProgram}
            servicesIncluded={tourData.servicesIncluded}
            regulations={tourData.regulations}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Contacts
            originalPrice={tourData.originalPrice}
            discountedPrice={tourData.discountedPrice}
            departureDate={tourData.departureDate}
            guestCount={tourData.guestCount}
            hotlineNumber={tourData.hotlineNumber}
            contacts={tourData.contacts}
          />
        </Grid>
      </Grid>
      <RelatedTours tours={tourData.relatedTours} />
      <ReviewForm />
      <LatestPosts posts={tourData.latestPosts} />
      <Box mt={4}>
        <HotelFlightCombos title="Dịch vụ du lịch" combos={hotelFlightCombos} />
      </Box>
    </Container>
  );
};

export default DetailTour;
