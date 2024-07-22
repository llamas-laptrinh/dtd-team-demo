import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import './style.css';

interface EmailFormValues {
  email: string;
}

interface VerificationFormValues {
  code: string;
}

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [showVerification, setShowVerification] = useState<boolean>(false);

  const handleEmailSubmit = (values: EmailFormValues) => {
    console.log('Submitted email:', values.email);
    setEmail(values.email);
    setShowVerification(true);
  };

  const handleVerificationSubmit = (values: VerificationFormValues) => {
    console.log('Submitted verification code:', values.code);
    if (values.code === '123456') {
      message.success('Mã xác minh hợp lệ!');
    } else {
      message.error('Mã xác minh không hợp lệ!');
    }
  };

  const handleResendVerification = () => {
    message.info('Đã gửi lại mã xác minh.');
  };

  return (
    <div className="forgot-password-container">
      {!showVerification ? (
        <Form
          name="forgot-password-email"
          layout="vertical"
          onFinish={handleEmailSubmit}
        >
          <h2 className="title">Quên mật khẩu</h2>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
          >
            <Input className='input' />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Gửi yêu cầu
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          name="forgot-password-verification"
          layout="vertical"
          onFinish={handleVerificationSubmit}
        >
          <h2 className="title">Xác minh email</h2>
          <p>Một mã xác minh đã được gửi đến <strong>{email}</strong>. Vui lòng nhập mã xác minh để tiếp tục.</p>

          <Form.Item
            label="Mã xác minh"
            name="code"
            rules={[{ required: true, message: 'Vui lòng nhập mã xác minh!' }]}
          >
            <Input className='input' />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Xác minh
            </Button>
            <Button type="link" onClick={handleResendVerification}>
              Gửi lại mã xác minh mới
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ForgotPassword;
