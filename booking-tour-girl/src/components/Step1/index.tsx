import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface Step1FormValues {
  fullname: string;
  email: string;
  phone: string;
  specialRequest?: string;
  preferences?: string[];
}

const Step1: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: Step1FormValues) => {
    console.log('Received values of form: ', values);
    navigate('/bookingtour/step2');
  };

  const tourDetails = {
    tourTitle: 'Tour Hạ Long – Ninh Bình – Sapa 4N3Đ',
    tourCode: 'TOHANHALNIBSAP4N3D-XEQK-285752',
    departureDate: '27/08/2024',
    guestCount: 1,
    pricePerGuest: 5590000,
    hotline: '1900 3398',
    imageUrl: 'https://www.vietnambooking.com/wp-content/uploads/2021/12/tour-ha-long-ninh-binh-sapa-4n3d-2024.jpg',
  };

  const totalPrice = tourDetails.pricePerGuest * tourDetails.guestCount;

  return (
    <div className={styles.stepContainer}>
      <div className={styles.formSection}>
        <h2>Điền thông tin liên hệ</h2>
        <Form<Step1FormValues>
          name="contact"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            label="Họ và tên"
            rules={[{ required: true, message: 'Hãy nhập họ và tên của bạn!' }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Hãy nhập email của bạn!' }]}
          >
            <Input type="email" placeholder="Nhập email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{ required: true, message: 'Hãy nhập số điện thoại của bạn!' }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item label="Hãy cho chúng tôi biết Quý khách cần gì?">
            <Checkbox.Group name="preferences">
              <Checkbox value="smoking">Hút thuốc</Checkbox>
              <Checkbox value="highFloor">Phòng tầng cao</Checkbox>
              <Checkbox value="children">Trẻ em hiếu động</Checkbox>
              <Checkbox value="vegetarian">Ăn chay</Checkbox>
              <Checkbox value="disabled">Có người khuyết tật</Checkbox>
              <Checkbox value="pregnant">Phụ nữ có thai</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="specialRequest"
            label="Thêm yêu cầu đặc biệt"
          >
            <Input.TextArea placeholder="Nhập yêu cầu của bạn" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tiếp tục
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className={styles.tourDetailsSection}>
        <img src={tourDetails.imageUrl} alt="Tour Hạ Long – Ninh Bình – Sapa" className={styles.tourImage} />
        <h3>Thông tin đặt tour</h3>
        <div>
          <strong>{tourDetails.tourTitle}</strong>
        </div>
        <div>
          <strong>Mã tour:</strong> {tourDetails.tourCode}
        </div>
        <div>
          <strong>Ngày khởi hành:</strong> {tourDetails.departureDate}
        </div>
        <div>
          <strong>Số khách:</strong> {tourDetails.guestCount} khách
        </div>
        <div>
          <strong>Giá 1 khách:</strong> {tourDetails.pricePerGuest.toLocaleString()} VND
        </div>
        <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '18px' }}>
          <strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VND
        </div>
        <div style={{ marginTop: '10px' }}>
          <strong>Gọi {tourDetails.hotline} để được hỗ trợ 24/7</strong>
        </div>
      </div>
    </div>
  );
}

export default Step1;