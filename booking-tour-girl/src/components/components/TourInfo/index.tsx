import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Box, Typography, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './styles.css';
import IconBus from '../../assets/icons/icon_bus.png';
import IconTicket from '../../assets/icons/icon_ticket.png';
import IconGuide from '../../assets/icons/icon_guide.png';
import IconMeal from '../../assets/icons/icon_meal.png';
import IconTick from '../../assets/icons/icon_tick.png';

interface TourInfoProps {
  title: string;
  images: string[];
  location: string;
  duration: string;
  code: string;
  departureDates: string[];
  transport: string;
  highlights: string[];
  description: string;
  contactInfo: string;
  tourProgram: string;
  servicesIncluded: string;
  regulations: string;
}

const TourInfo: React.FC<TourInfoProps> = ({
  title,
  images,
  location,
  duration,
  code,
  departureDates,
  transport,
  highlights,
  description,
  contactInfo,
  tourProgram,
  servicesIncluded,
  regulations
}) => {
  return (
    <Box className="tour-info-container">
      <Typography className="tour-info-title">
        {title}
      </Typography>
      <Carousel showThumbs={false} className="tour-info-carousel" autoPlay interval={4000}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      <Box className="tour-info-details">
        <Box className="tour-info-details-item">
          <LocationOnIcon className="tour-info-details-icon" />
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box className="tour-info-details-item">
          <Typography variant="body1">{duration}</Typography>
        </Box>
        <Box className="tour-info-details-item">
          <FlightTakeoffIcon className="tour-info-details-icon" />
          <Typography variant="body1">{transport}</Typography>
        </Box>
      </Box>
      <Link href="#" className="tour-info-code">
        MÃ TOUR: <span>{code}</span>
      </Link>
      <Box className="tour-info-departure">
        <CalendarTodayIcon className="tour-info-details-icon tour-info-departure-icon" />
        <Typography variant="body1">
          Khởi hành: {departureDates.join(', ')}
        </Typography>
      </Box>
      <Box mt={2} className="tour-info-services">
        <Typography variant="h6" gutterBottom className="services-title">
          Dịch vụ kèm theo:
        </Typography>
        <ul className="services-list">
          <li>
            <img src={IconTick} alt="Bảo hiểm" className="service-icon" />
            <span>Bảo hiểm</span>
          </li>
          <li>
            <img src={IconMeal} alt="Bữa ăn" className="service-icon" />
            <span>Bữa ăn</span>
          </li>
          <li>
            <img src={IconGuide} alt="Hướng dẫn viên" className="service-icon" />
            <span>Hướng dẫn viên</span>
          </li>
          <li>
            <img src={IconBus} alt="Xe đưa đón" className="service-icon" />
            <span>Xe đưa đón</span>
          </li>
          <li>
            <img src={IconTicket} alt="Vé tham quan" className="service-icon" />
            <span>Vé tham quan</span>
          </li>
        </ul>
      </Box>
      <Box mt={2} className="tour-info-description">
        <Typography>
          <span className='description-text'>{description}</span>
        </Typography>
      </Box>
      <Box mt={2} className="tour-info-highlights">
        <Typography variant="h6" gutterBottom className="highlights-title">
          Điểm nổi bật của tour:
        </Typography>
        <ul className="highlights-list">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </Box>
      <Box mt={2} className="tour-info-contact">
        <Typography>
          <span className='contact-number'>{contactInfo}</span>
        </Typography>
      </Box>

      <Accordion className="accordion-root">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accordion-summary">
          <Typography className="accordion-summary-content">CHƯƠNG TRÌNH TOUR</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>{tourProgram}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-root">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accordion-summary">
          <Typography className="accordion-summary-content">DỊCH VỤ BAO GỒM</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>{servicesIncluded}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-root">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accordion-summary">
          <Typography className="accordion-summary-content">QUY ĐỊNH</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>{regulations}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TourInfo;
