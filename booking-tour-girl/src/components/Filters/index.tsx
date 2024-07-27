import React from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Slider, Divider } from '@mui/material';
import './styles.css';

interface FiltersProps {
  title: string;
  budgetLabel: string;
  budget: {
    defaultValue: number;
    min: number;
    max: number;
    step: number;
  };
  popularFiltersLabel: string;
  popularFilters: string[];
  amenitiesLabel: string;
  amenities: string[];
  roomAndBathLabel: string;
  roomAndBath: string[];
}

const Filters: React.FC<FiltersProps> = ({
  title,
  budgetLabel,
  budget,
  popularFiltersLabel,
  popularFilters,
  amenitiesLabel,
  amenities,
  roomAndBathLabel,
  roomAndBath
}) => (
  <Box className="filters">
    <Typography variant="h6" gutterBottom>{title}</Typography>
    <Typography variant="subtitle1" gutterBottom>{budgetLabel}</Typography>
    <Slider
      defaultValue={budget.defaultValue}
      min={budget.min}
      max={budget.max}
      step={budget.step}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
    <Divider />
    <Typography variant="subtitle1" gutterBottom>{popularFiltersLabel}</Typography>
    {popularFilters.map(filter => (
      <FormControlLabel key={filter} control={<Checkbox />} label={filter} />
    ))}
    <Divider />
    <Typography variant="subtitle1" gutterBottom>{amenitiesLabel}</Typography>
    {amenities.map(amenity => (
      <FormControlLabel key={amenity} control={<Checkbox />} label={amenity} />
    ))}
    <Divider />
    <Typography variant="subtitle1" gutterBottom>{roomAndBathLabel}</Typography>
    {roomAndBath.map(roomBath => (
      <FormControlLabel key={roomBath} control={<Checkbox />} label={roomBath} />
    ))}
  </Box>
);

export default Filters;
