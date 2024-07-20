import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LocationOn, CalendarToday } from '@mui/icons-material';
import './styles.css';

interface Combo {
  name: string;
  image: string;
  location: string;
  days: string;
  originalPrice: string;
  discountPrice: string;
  discountPercentage: string;
  rating: number;
}

interface ComboCardProps {
  combo: Combo;
}

const ComboCard: React.FC<ComboCardProps> = ({ combo }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const fullStars = Math.floor(combo.rating);
  const halfStar = combo.rating - fullStars >= 0.5;

  return (
    <Card className={isSmallScreen ? "combo-card-mobile" : "combo-card"}>
      <CardMedia
        component="img"
        alt={combo.name}
        image={combo.image}
        title={combo.name}
        className="combo-image-media"
        sx={{ width: isSmallScreen ? '100%' : '336px', height: isSmallScreen ? 'auto' : '250px' }}
      />
      <CardContent className="combo-card-content">
        <Box>
          <Typography variant="h6" className="combo-name">{combo.name}</Typography>
          <Typography variant="body2" className="combo-details">
            <CalendarToday fontSize="small" /> {combo.days} &nbsp;·&nbsp; <LocationOn fontSize="small" /> {combo.location}
          </Typography>
          <Box className="combo-rating">
            {Array.from({ length: fullStars }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            {halfStar && <span>★</span>}
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" className="combo-original-price">
              {combo.originalPrice}
            </Typography>
            <Typography variant="h6" className="combo-discount-price">
              {combo.discountPrice}
            </Typography>
          </Box>
          <Chip label={combo.discountPercentage} className="combo-discount" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComboCard;
