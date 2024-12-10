import React, { useState } from 'react';
import { Form, Radio, Button, RadioChangeEvent } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface Step2FormValues {
  paymentMethod: 'cash' | 'bankTransfer';
}

const Step2: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bankTransfer'>('cash');

  const onFinish = (values: Step2FormValues) => {
    console.log('Payment method selected: ', values.paymentMethod);
    navigate('/bookingtour/step3');
  };

  const handlePaymentChange = (e: RadioChangeEvent) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className={styles.stepContainer}>
      <h2>Thanh toán</h2>
      <Form<Step2FormValues>
        name="payment"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="paymentMethod"
          label="Chọn phương thức thanh toán"
          rules={[{ required: true, message: 'Hãy chọn một phương thức thanh toán!' }]}
        >
          <Radio.Group onChange={handlePaymentChange} value={paymentMethod} className={styles.radioGroup}>
            <Radio value="cash">Tiền mặt</Radio>
            <Radio value="bankTransfer">Chuyển khoản</Radio>
          </Radio.Group>
        </Form.Item>

        {paymentMethod === 'bankTransfer' && (
          <div className={styles.qrSection}>
            <h3>Thông tin QR chuyển khoản</h3>
            <img
              src="https://media.tapchitaichinh.vn/images/upload/dohai/06292021/qr_tk-covid.png"
              alt="QR Chuyển khoản"
              className={styles.qrImage}
            />
          </div>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submitButton}>
            Xác nhận và Đặt tour
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Step2;