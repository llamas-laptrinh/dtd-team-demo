import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import './styles.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  }

  return (
    <Box className="pagination">
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-button"
      >
        <ArrowBackIos />
      </IconButton>
      {pageNumbers.map((page, index) => (
        <Button
          key={index}
          variant={page === currentPage ? 'contained' : 'outlined'}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === currentPage}
          className={page === currentPage ? 'current-page' : 'page-button'}
        >
          {page}
        </Button>
      ))}
      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-button"
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Pagination;
