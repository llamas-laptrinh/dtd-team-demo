import React from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import './styles.css';

interface Contact {
  name: string;
  phone: string;
}

interface ContactsProps {
  originalPrice: string;
  discountedPrice: string;
  departureDate: string;
  guestCount: string;
  hotlineNumber: string;
  contacts: Contact[];
}

const Contacts: React.FC<ContactsProps> = ({ 
  originalPrice, 
  discountedPrice, 
  departureDate, 
  guestCount, 
  hotlineNumber, 
  contacts 
}) => {
  return (
    <Box className="contacts-container">
      <Box className="price-section">
        <Typography className="original-price">{originalPrice}</Typography>
        <Typography className="discounted-price">{discountedPrice}</Typography>
        <Typography className="price-unit">VND/người</Typography>
        <Box className="form-group">
          <InputLabel className="form-label">KHỞI HÀNH</InputLabel>
          <TextField
            type="date"
            defaultValue={departureDate}
            InputLabelProps={{ shrink: true }}
            className="form-control"
          />
        </Box>
        <Box className="form-group">
          <InputLabel className="form-label">SỐ KHÁCH</InputLabel>
          <FormControl className="form-control">
            <Select defaultValue={guestCount}>
              <MenuItem value="01 Khách">01 Khách</MenuItem>
              <MenuItem value="02 Khách">02 Khách</MenuItem>
              <MenuItem value="03 Khách">03 Khách</MenuItem>
              <MenuItem value="04 Khách">04 Khách</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" className="book-button">ĐẶT TOUR</Button>
      </Box>
      
      <Box className="hotline-section">
        <Typography className="hotline-title">TỔNG ĐÀI TƯ VẤN</Typography>
        <Typography className="hotline-info">Mọi thắc mắc của Quý khách vui lòng gọi: <span className="hotline-number">{hotlineNumber}</span></Typography>
        <Typography className="hotline-support">Chúng tôi hỗ trợ 24/7</Typography>
      </Box>
      
      <Box className="contacts-section">
        <Typography className="contact-title">Liên hệ tư vấn viên</Typography>
        <Box className="contact-list">
          {contacts.map((contact, index) => (
            <Box key={index} className="contact-item">
              <PhoneIcon className="phone-icon" />
              <Typography className="contact-name">{contact.name}</Typography>
              <Typography className="contact-phone">{contact.phone}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
