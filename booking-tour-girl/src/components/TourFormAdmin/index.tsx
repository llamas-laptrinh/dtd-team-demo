import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, List, Space, message } from 'antd';
import moment from 'moment';

interface TourData {
  id: string;
  title: string;
  imagedetail: string[];
  location: string;
  duration: string;
  code: string;
  departure_dates: string[];
  transport: string;
  highlights: string[];
  description: string;
  contact_info: string;
  tour_program: string;
  services_included: string;
  regulations: string;
  original_price: string;
  discounted_price: string;
  departure_date: string;
  guest_count: string;
  hotline_number: string;
}

interface TourFormProps {
  onClose: () => void;
  onAddTour: (tour: TourData) => void;
  editingTour?: TourData | null;
}

const TourForm: React.FC<TourFormProps> = ({ onClose, onAddTour, editingTour }) => {
  const [form] = Form.useForm();
  const [images, setImages] = useState<string[]>(editingTour?.imagedetail || []);
  const [highlights, setHighlights] = useState<string[]>(editingTour?.highlights || []);
  const [dates, setDates] = useState<string[]>(editingTour?.departure_dates || []);
  const [imageInput, setImageInput] = useState<string>('');
  const [highlightInput, setHighlightInput] = useState<string>('');
  const [dateInput, setDateInput] = useState<moment.Moment | null>(null);

  const onFinish = async (values: Omit<TourData, 'id' | 'imagedetail' | 'highlights' | 'departure_dates'>) => {
    const departureDate = moment(values.departure_date); // Ensure departure_date is a moment object
    const newTour: TourData = {
      ...values,
      imagedetail: images,
      highlights: highlights,
      departure_dates: dates,
      departure_date: departureDate.format('YYYY-MM-DD'), // Format the date to string
      id: editingTour?.id || String(Date.now()) // Generate id if not provided
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/tours', {
        method: editingTour ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTour),
      });

      if (response.ok) {
        const createdTour = await response.json();
        message.success(editingTour ? 'Tour updated successfully!' : 'Tour created successfully!');
        onAddTour(createdTour);
        onClose();
      } else {
        const errorData = await response.json();
        message.error(`Failed to save the tour: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating tour:', error);
      message.error('Error occurred while saving the tour.');
    }
  };

  const handleAddImage = () => {
    if (imageInput && !images.includes(imageInput)) {
      setImages((prev) => [...prev, imageInput]);
      setImageInput('');
    }
  };

  const handleAddHighlight = () => {
    if (highlightInput && !highlights.includes(highlightInput)) {
      setHighlights((prev) => [...prev, highlightInput]);
      setHighlightInput('');
    }
  };

  const handleAddDate = () => {
    if (dateInput) {
      const formattedDate = dateInput.format('YYYY-MM-DD');
      if (!dates.includes(formattedDate)) {
        setDates((prev) => [...prev, formattedDate]);
        setDateInput(null);
      }
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the tour title' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Please enter the tour location' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="duration" label="Duration" rules={[{ required: true, message: 'Please enter the tour duration' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="code" label="Tour Code" rules={[{ required: true, message: 'Please enter the tour code' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="transport" label="Transport" rules={[{ required: true, message: 'Please enter the transport type' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the tour description' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="contact_info" label="Contact Info" rules={[{ required: true, message: 'Please enter contact info' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="tour_program" label="Tour Program" rules={[{ required: true, message: 'Please enter the tour program' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="services_included" label="Services Included" rules={[{ required: true, message: 'Please enter the services included' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="regulations" label="Regulations" rules={[{ required: true, message: 'Please enter the regulations' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="original_price" label="Original Price" rules={[{ required: true, message: 'Please enter the original price' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="discounted_price" label="Discounted Price" rules={[{ required: true, message: 'Please enter the discounted price' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="departure_date" label="Departure Date" rules={[{ required: true, message: 'Please enter the departure date' }]}>
        <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="guest_count" label="Guest Count" rules={[{ required: true, message: 'Please enter the guest count' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="hotline_number" label="Hotline Number" rules={[{ required: true, message: 'Please enter the hotline number' }]}>
        <Input />
      </Form.Item>

      {/* Image Input */}
      <Form.Item label="Image URLs">
        <Input
          placeholder="Enter image URL"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          onPressEnter={handleAddImage}
        />
        <Button type="dashed" onClick={handleAddImage} style={{ marginTop: '8px' }}>
          Add Image
        </Button>
        <List
          dataSource={images}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginTop: '16px' }}
        />
      </Form.Item>

      {/* Highlights Input */}
      <Form.Item label="Highlights">
        <Input
          placeholder="Enter highlight"
          value={highlightInput}
          onChange={(e) => setHighlightInput(e.target.value)}
          onPressEnter={handleAddHighlight}
        />
        <Button type="dashed" onClick={handleAddHighlight} style={{ marginTop: '8px' }}>
          Add Highlight
        </Button>
        <List
          dataSource={highlights}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginTop: '16px' }}
        />
      </Form.Item>

      {/* Departure Dates Input */}
      <Form.Item label="Departure Dates">
        <DatePicker
          format="YYYY-MM-DD"
          value={dateInput}
          onChange={(date) => setDateInput(date)}
          style={{ width: '100%' }}
        />
        <Button type="dashed" onClick={handleAddDate} style={{ marginTop: '8px' }}>
          Add Date
        </Button>
        <List
          dataSource={dates}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginTop: '16px' }}
        />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {editingTour ? 'Update Tour' : 'Add Tour'}
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TourForm;