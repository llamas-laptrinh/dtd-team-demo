import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.css';
import FacebookIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/search.png';
import AppleIcon from '../../assets/icons/apple-logo.png';

interface LoginValues {
  email: string;
}

interface ErrorInfo {
  values: LoginValues;
  errorFields: { name: (string | number)[], errors: string[] }[];
  outOfDate: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: LoginValues) => {
    console.log('Success:', values);
    navigate('/dashboard');
  };

  const onFinishFailed = (errorInfo: ErrorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <h2 className="title">Đăng nhập hoặc tạo tài khoản</h2>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
        >
          <Input placeholder="Nhập địa chỉ email của bạn" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Tiếp tục với email
          </Button>
        </Form.Item>
        <div className="alternative-options">
          <div className="separator">
            <span className="alternative-text">hoặc sử dụng một trong các lựa chọn này</span>
          </div>
          <div className="social-buttons">
            <Button className="social-button">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </Button>
            <Button className="social-button">
              <img src={GoogleIcon} alt="Google" className="social-icon" />
            </Button>
            <Button className="social-button">
              <img src={AppleIcon} alt="Apple" className="social-icon" />
            </Button>
          </div>
        </div>
        <div className="footer">
          <p>
            Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các
            <a href="#"> Điều khoản và Điều kiện</a> cũng như
            <a href="#"> Chính sách An toàn và Bảo mật</a> của chúng tôi
          </p>
          <p>Bảo lưu mọi quyền.<br />Bản quyền (2024) - BookingTourGirl.com™</p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
