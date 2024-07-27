import React from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './styles.css';

const ReviewForm: React.FC = () => {
  return (
    <Box className="review-form-container">
      <Typography variant="h6" className="review-form-title">
        Nhận xét và đánh giá
      </Typography>
      <Button variant="contained" className="write-review-button">
        ✏️ Viết đánh giá
      </Button>
      <Box className="review-form">
        <Box className="form-group">
          <TextField
            label="Họ và tên"
            required
            fullWidth
            className="form-control"
          />
          <TextField
            label="Mã đơn hàng"
            required
            fullWidth
            className="form-control"
          />
        </Box>
        <Box className="form-group">
          <FormControl fullWidth className="form-control">
            <InputLabel className='reviews-text'>Đánh giá</InputLabel>
            <Select defaultValue="5 sao">
              <MenuItem value="5 sao">5 sao</MenuItem>
              <MenuItem value="4 sao">4 sao</MenuItem>
              <MenuItem value="3 sao">3 sao</MenuItem>
              <MenuItem value="2 sao">2 sao</MenuItem>
              <MenuItem value="1 sao">1 sao</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form-group">
          <TextField
            label="Nội dung"
            required
            fullWidth
            multiline
            rows={4}
            className="form-control"
          />
        </Box>
        <Button variant="contained" className="submit-button">
          GỬI
        </Button>
      </Box>
      <Box className="review-message">
        <Typography variant="body2">
          Mọi phản hồi của quý khách luôn là nguồn động lực để chúng tôi mang đến nhiều sản phẩm thú vị hơn! Hãy để lại cảm nhận của bạn nhé!
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewForm;
