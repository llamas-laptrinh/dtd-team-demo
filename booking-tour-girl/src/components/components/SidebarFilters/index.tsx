import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './styles.css';

interface FilterCategory {
  title: string;
  options: string[];
}

interface SidebarFiltersProps {
  filterCategories: FilterCategory[];
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ filterCategories }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={isSmallScreen ? "sidebar-filters-mobile" : "sidebar-filters"}>
      {filterCategories.map((category, index) => (
        <div key={index}>
          <Typography variant="h6" style={{ marginTop: index > 0 ? '20px' : 0 }}>{category.title}</Typography>
          <FormGroup>
            {category.options.map((option, idx) => (
              <FormControlLabel key={idx} control={<Checkbox />} label={option} />
            ))}
          </FormGroup>
        </div>
      ))}
    </Box>
  );
};

export default SidebarFilters;
