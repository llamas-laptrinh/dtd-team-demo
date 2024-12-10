import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Step3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.formContainer}>
      <h2>Đặt tour thành công!</h2>
      <p>Cảm ơn bạn đã đặt tour với chúng tôi. Chuyến đi của bạn đã được xác nhận.</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button type="primary" onClick={() => navigate('/')}>
          Về trang chủ
        </Button>
      </div>
    </div>
  );
}

export default Step3;