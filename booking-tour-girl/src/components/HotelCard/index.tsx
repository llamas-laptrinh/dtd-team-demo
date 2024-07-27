import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Box, Chip } from '@mui/material';
import { Favorite, Star } from '@mui/icons-material';

interface Hotel {
  name: string;
  image: string;
  location: string;
  distance: string;
  promotion: string[];
  description: string;
  rating: number;
  price: string;
  originalPrice: string;
  reviewCount: number;
  taxAndFees: string;
  availabilityInfo: string;
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const fullStars = Math.floor(hotel.rating);

  return (
    <Card className="hotel-card">
      <CardMedia
        component="img"
        alt={hotel.name}
        image={hotel.image}
        title={hotel.name}
        className="hotel-image"
        sx={{ width: 336 }}
      />
      <Box className="hotel-card-content">
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" className="hotel-name">{hotel.name}</Typography>
            <IconButton>
              <Favorite color="error" />
            </IconButton>
          </Box>
          <Typography variant="body2" color="textSecondary">
            {hotel.location} · <a href="#" className="hotel-map-link">Xem trên bản đồ</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" className="hotel-distance">
            {hotel.distance}
          </Typography>
          <Box>
            {hotel.promotion.map((promo, index) => (
              <Chip key={index} label={promo} color="success" variant="outlined" className="hotel-promotion" />
            ))}
          </Box>
          <Typography variant="body2" className="hotel-description">
            {hotel.description}
          </Typography>
          <Box display="flex" alignItems="center" className="hotel-rating">
            {Array(fullStars).fill(0).map((_, i) => <Star key={i} className="hotel-star" />)}
            <Typography variant="body2" color="textSecondary" className="hotel-rating-value">{hotel.rating}</Typography>
            <Typography variant="body2" color="textSecondary" className="hotel-review-count">({hotel.reviewCount} đánh giá)</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box>
              <Typography variant="body2" className="hotel-original-price">
                {hotel.originalPrice}
              </Typography>
              <Typography variant="h6" className="hotel-price">
                {hotel.price}
              </Typography>
              <Typography variant="body2" className="hotel-tax">
                +{hotel.taxAndFees}
              </Typography>
            </Box>
            <Button variant="contained" color="primary" className="hotel-button">Xem chỗ trống</Button>
          </Box>
          <Typography variant="body2" className="availability-info">
            {hotel.availabilityInfo}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HotelCard;
