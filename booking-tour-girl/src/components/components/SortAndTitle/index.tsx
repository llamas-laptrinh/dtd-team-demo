import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import './styles.css';

interface SortOption {
  value: string | number;
  label: React.ReactNode;
}

interface SortAndTitleProps {
  title: string;
  sortOptions: SortOption[];
  defaultSort: string | number;
}

const SortAndTitle: React.FC<SortAndTitleProps> = ({ title, sortOptions, defaultSort }) => (
  <Box className="sort-and-title" display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    <Typography variant="h5" className="title">
      {title}
    </Typography>
    <FormControl variant="outlined" className="sort-select">
      <Select defaultValue={defaultSort} displayEmpty>
        {sortOptions.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default SortAndTitle;
