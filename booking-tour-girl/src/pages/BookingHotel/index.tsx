import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import MapButton from '../../components/MapButton';
import Filters from '../../components/Filters';
import HotelCard from '../../components/HotelCard';
import SortAndTitle from '../../components/SortAndTitle';
import IMG from '../../assets/imgs/img_hotel/hotell.jpg';
import './styles.css';

const hotels = [
  {
    name: 'Pacific Apartment & Hotel Phu Quoc',
    image: IMG,
    description: 'Căn Hộ 2 Phòng Ngủ, 1 phòng tắm, bếp, sofa...',
    rating: 4.5,
    promotion: ['Ưu Đãi Trong Thời Gian Có Hạn'],
    price: 'VND 6.670.698',
    originalPrice: 'VND 8.000.000',
    location: 'Dương Tơ, Phú Quốc',
    distance: 'Cách trung tâm 12,1km',
    reviewCount: 277,
    taxAndFees: 'VND 1.795.600 thuế và phí',
    availabilityInfo: 'Chỉ còn 3 căn với giá này trên trang của chúng tôi'
  },
  {
    name: 'Hong Bin Bungalow',
    image: IMG,
    description: 'Bungalow Gia Đình - Cửa Nối, 2 giường đôi...',
    rating: 4,
    promotion: ['Ưu Đãi Trong Thời Gian Có Hạn'],
    price: 'VND 5.220.000',
    originalPrice: 'VND 6.000.000',
    location: 'Dương Tơ, Phú Quốc',
    distance: 'Cách trung tâm 1,4km',
    reviewCount: 150,
    taxAndFees: 'VND 1.795.600 thuế và phí',
    availabilityInfo: 'Chỉ còn 3 căn với giá này trên trang của chúng tôi'
  }
];

const filterProps = {
  title: "Chọn lọc theo:",
  budgetLabel: "Ngân sách của bạn (mỗi đêm)",
  budget: {
    defaultValue: 1000000,
    min: 200000,
    max: 4000000,
    step: 100000,
  },
  popularFiltersLabel: "Các bộ lọc phổ biến",
  popularFilters: [
    "Resort",
    "5 sao",
    "Bao gồm bữa sáng",
    "Hồ bơi",
    "Căn hộ",
    "Giáp biển",
    "Không cần thanh toán trước",
    "Miễn phí hủy",
  ],
  amenitiesLabel: "Tiện nghi",
  amenities: [
    "WiFi miễn phí",
    "Điều hòa nhiệt độ",
  ],
  roomAndBathLabel: "Phòng ngủ và phòng tắm",
  roomAndBath: [
    "Phòng ngủ",
    "Phòng tắm",
  ],
};

const sortOptions = [
  { value: '', label: <em>Lựa chọn hàng đầu của chúng tôi</em> },
  { value: 10, label: 'Giá tăng dần' },
  { value: 20, label: 'Giá giảm dần' },
  { value: 30, label: 'Đánh giá cao nhất' },
];

const BookingHotel: React.FC = () => (
  <Container className='container-body'>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Box display="flex" flexDirection="column" alignItems="start">
          <MapButton />
          <Filters {...filterProps} />
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <SortAndTitle 
          title="Phú Quốc: tìm thấy 855 chỗ nghỉ" 
          sortOptions={sortOptions} 
          defaultSort="" 
        />
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </Grid>
    </Grid>
  </Container>
);

export default BookingHotel;
