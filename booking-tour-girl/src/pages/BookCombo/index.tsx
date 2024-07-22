import React, { useState } from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import SidebarFilters from '../../components/SidebarFilters';
import ComboCard from '../../components/ComboCard';
import Pagination from '../../components/Pagination';
import ComboCarousel from '../../components/PopularCombos';
import ArticleCard from '../../components/ArticleCard';
import HotelFlightCombos from '../../components/HotelFlightCombos';
import IMG from '../../assets/imgs/img_hotel/combo.jpg';
import Dulichtet from '../../assets/imgs/img_hotel/Article/combo-du-lich-tet-1-300x120.jpg';
import BinhDinh from '../../assets/imgs/img_hotel/Article/dia-diem-du-lich-binh-dinh-4-300x120.jpg';
import NinhThuant6 from '../../assets/imgs/img_hotel/Article/dia-diem-du-lich-ninh-thuan-6-300x120.jpg';
import PhuYent7 from '../../assets/imgs/img_hotel/Article/dia-diem-du-lich-phu-yen-7-300x120.jpg';
import NinhThuant9 from '../../assets/imgs/img_hotel/Article/dia-diem-du-lich-binh-dinh-4-300x120.jpg';
import PhuYent9 from '../../assets/imgs/img_hotel/Article/kinh-nghiem-du-lich-phu-yen-9-300x120.jpg';
import imgcombo from '../../assets/imgs/img_hotel/caroshellcombo.jpg';
import './styles.css';
import BackToTopButton from '../../components/BackToTop';

const combos = [
  {
    name: 'Combo 3N2Đ Vinpearl Resort Nha Trang 5 sao + Vé máy bay',
    image: IMG,
    location: 'Nha Trang',
    days: '3 ngày 2 đêm',
    originalPrice: '6,875,000đ',
    discountPrice: '4,125,000đ',
    discountPercentage: 'Tiết kiệm 40%',
    rating: 4.8,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort & Golf Nam Hội An 5 sao + Vé máy bay + Đón tiễn sân bay',
    image: IMG,
    location: 'Hội An',
    days: '3 ngày 2 đêm',
    originalPrice: '7,985,000đ',
    discountPrice: '5,190,000đ',
    discountPercentage: 'Tiết kiệm 35%',
    rating: 4.7,
  },
  {
    name: 'Combo 3N2Đ Vinpearl GolfLink Nha Trang 5* + Vé máy bay',
    image: IMG,
    location: 'Nha Trang',
    days: '3 ngày 2 đêm',
    originalPrice: '8,792,000đ',
    discountPrice: '6,154,000đ',
    discountPercentage: 'Tiết kiệm 30%',
    rating: 4.8,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort Phú Quốc 5 sao + Vé máy bay',
    image: IMG,
    location: 'Phú Quốc',
    days: '3 ngày 2 đêm',
    originalPrice: '9,875,000đ',
    discountPrice: '7,125,000đ',
    discountPercentage: 'Tiết kiệm 28%',
    rating: 4.9,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort Đà Nẵng 5 sao + Vé máy bay',
    image: IMG,
    location: 'Đà Nẵng',
    days: '3 ngày 2 đêm',
    originalPrice: '10,875,000đ',
    discountPrice: '8,125,000đ',
    discountPercentage: 'Tiết kiệm 25%',
    rating: 4.8,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort Hạ Long 5 sao + Vé máy bay',
    image: IMG,
    location: 'Hạ Long',
    days: '3 ngày 2 đêm',
    originalPrice: '11,875,000đ',
    discountPrice: '9,125,000đ',
    discountPercentage: 'Tiết kiệm 23%',
    rating: 4.7,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort Nha Trang 5 sao + Vé máy bay',
    image: IMG,
    location: 'Nha Trang',
    days: '3 ngày 2 đêm',
    originalPrice: '12,875,000đ',
    discountPrice: '10,125,000đ',
    discountPercentage: 'Tiết kiệm 21%',
    rating: 4.8,
  },
  {
    name: 'Combo 3N2Đ Vinpearl Resort Nha Trang 5 sao + Vé máy bay',
    image: IMG,
    location: 'Nha Trang',
    days: '3 ngày 2 đêm',
    originalPrice: '13,875,000đ',
    discountPrice: '11,125,000đ',
    discountPercentage: 'Tiết kiệm 20%',
    rating: 4.9,
  },
];

const popularCombos = [
  { image: imgcombo, price: '2.837.000' },
  { image: imgcombo, price: '1.238.000' },
  { image: imgcombo, price: '4.599.000' },
  { image: imgcombo, price: '2.837.000' },
  { image: imgcombo, price: '1.238.000' },
  { image: imgcombo, price: '4.599.000' },
];

const articles = [
  {
    image: Dulichtet,
    title: 'Khám phá những combo du lịch Tết trong và ngoài nước hấp dẫn, không nên bỏ qua',
  },
  {
    image: BinhDinh,
    title: 'Điểm danh top 14 địa điểm du lịch Bình Định bạn không nên bỏ qua',
  },
  {
    image: PhuYent7,
    title: 'Bỏ túi ngay trọn bộ kinh nghiệm du lịch Phú Yên tự túc từ A – Z',
  },
  {
    image: PhuYent9,
    title: 'Check ngay 12 địa điểm du lịch Phú Yên phải đến một lần trong đời',
  },
  {
    image: NinhThuant6,
    title: 'Trọn bộ kinh nghiệm du lịch Ninh Thuận tự túc từ A – Z mới nhất',
  },
  {
    image: NinhThuant9,
    title: 'Khám phá ngay 14 địa điểm du lịch Ninh Thuận đẹp đến xiêu lòng',
  },
];

const hotelFlightCombos = [
  'Combo khách sạn + vé máy bay Phú Quốc',
  'Combo khách sạn + Vé xe/máy bay Vũng Tàu',
  'Combo khách sạn + vé máy bay Phú Yên',
  'Combo khách sạn + vé máy bay Phan Thiết',
  'Combo khách sạn + vé máy bay Quảng Bình',
  'Combo khách sạn + vé máy bay Hải Phòng',
  'Combo khách sạn + vé máy bay Nha Trang',
  'Combo khách sạn /du thuyền + vé máy bay Hạ Long',
  'Combo khách sạn + vé máy bay Quy Nhơn',
  'Combo khách sạn + vé máy bay Ninh Thuận',
  'Combo khách sạn + vé máy bay Vinh',
  'Combo khách sạn + vé máy bay Sapa',
  'Combo khách sạn + vé máy bay Đà Nẵng',
  'Combo khách sạn + vé máy bay Hà Nội',
  'Combo khách sạn + vé máy bay Buôn Ma Thuột',
  'Combo khách sạn + vé máy bay Hội An',
  'Combo khách sạn + vé máy bay Ninh Bình',
  'Combo khách sạn + vé máy bay Tây Ninh',
  'Combo khách sạn + vé máy bay Đà Lạt',
  'Combo khách sạn + vé máy bay Sài Gòn',
  'Combo khách sạn + vé máy bay Côn Đảo',
  'Combo khách sạn + vé máy bay Huế',
  'Combo khách sạn + vé máy bay Vinpearl',
  'Combo khách sạn + vé máy bay Cần Thơ',
];

const filterCategories = [
  {
    title: 'Phổ biến nhất',
    options: [
      'Hạng sao từ cao đến thấp [5...1]',
      'Hạng sao từ thấp đến cao [1...5]',
      'Giá tăng dần',
      'Giá giảm dần',
    ],
  },
  {
    title: 'Danh mục',
    options: [
      'Khách sạn',
      'Tour',
      'Resort',
      'Villa',
    ],
  },
  {
    title: 'Du lịch theo chủ đề',
    options: [
      'Honeymoon',
      'Opening',
      'Flash Deal',
      'Special',
      'Tour',
      'Khách sạn & Resort',
    ],
  },
];

const BookCombo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(combos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCombos = combos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className='container-body'>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Typography variant="h5">Combo nghỉ dưỡng siêu tiết kiệm</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SidebarFilters filterCategories={filterCategories} />
        </Grid>
        <Grid item xs={12} md={9}>
          {displayedCombos.map((combo, index) => (
            <ComboCard key={index} combo={combo} />
          ))}
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Box>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h6" mb={2} className='title-h7'>Các loại combo được ưa chuộng nhất</Typography>
        <ComboCarousel combos={popularCombos} />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" mb={2} className='title-h7'>Kinh nghiệm du lịch từ Vietnam Booking</Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ArticleCard image={article.image} title={article.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={4}>
        <HotelFlightCombos title="Combo vé máy bay + khách sạn" combos={hotelFlightCombos} />
      </Box>
      <BackToTopButton />
    </Container>
  );
};

export default BookCombo;
