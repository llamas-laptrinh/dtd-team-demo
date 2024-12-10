import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Steps } from 'antd';
import Step1 from '../../components/Step1';
import Step2 from '../../components/ Step2';
import Step3 from '../../components/Step3';
import styles from './styles.module.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Điền thông tin',
    path: '/bookingtour/step1',
  },
  {
    title: 'Thanh Toán',
    path: '/bookingtour/step2',
  },
  {
    title: 'Xác nhận',
    path: '/bookingtour/step3',
  },
];

const BookingTour: React.FC = () => {
  const location = useLocation();
  const currentStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className={styles.bookingTourContainer}>
      <Steps current={currentStep} className={styles.steps}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <div className={styles.stepContent}>
        <Routes>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="*" element={<Step1 />} />
        </Routes>
      </div>
    </div>
  );
}

export default BookingTour;