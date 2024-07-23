import React from 'react';
import { Container, Typography, Box } from '@mui/material';


type HotelFlightCombosProps = {
  title: string;
  combos: string[];
};

const HotelFlightCombos: React.FC<HotelFlightCombosProps> = ({ title, combos }) => {
  return (
    <Container className="hotel-flight-combos-container">
      <Box mb={4}>
        <Typography variant="h6" className="title-h6">{title}</Typography>
        <hr className="line-full" />
      </Box>
      <ul className="combo-list">
        {combos.map((combo, index) => (
          <li key={index} className="combo-item">{combo}</li>
        ))}
      </ul>
    </Container>
  );
};

export default HotelFlightCombos;
