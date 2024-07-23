import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './styles.css';

interface Tour {
  image: string;
  title: string;
  price: string;
  departure: string;
}

interface RelatedToursProps {
  tours: Tour[];
}

const RelatedTours: React.FC<RelatedToursProps> = ({ tours }) => {
  return (
    <Box className="related-tours-container">
      <Typography variant="h6" className="related-tours-title">
        Các tour khác có thể bạn quan tâm
      </Typography>
      <Grid container spacing={2}>
        {tours.map((tour, index) => (
          <Grid item xs={12} key={index}>
            <Box className="tour-item">
              <img src={tour.image} alt={tour.title} className="tour-image" />
              <Box className="tour-info">
                <Typography variant="subtitle1" className="tour-title">
                  {tour.title}
                </Typography>
                <Typography variant="body1" className="tour-price">
                  Giá: <span>{tour.price}</span>
                </Typography>
                <Typography variant="body2" className="tour-departure">
                  Khởi hành: {tour.departure}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedTours;
