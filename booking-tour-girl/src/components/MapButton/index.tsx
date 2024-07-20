import React from 'react';
import { Button } from '@mui/material';
import { Map } from '@mui/icons-material';
import './styles.css';

const MapButton: React.FC = () => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<Map />}
    fullWidth
    className="map-button"
  >
    Hiển thị trên bản đồ
  </Button>
);

export default MapButton;
