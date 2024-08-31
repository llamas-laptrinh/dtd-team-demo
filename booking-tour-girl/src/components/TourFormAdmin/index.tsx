import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Carousel, List, Space } from 'antd';

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
  const [highlightInput, setHighlightInput] = useState<string>('');
  const [imageInput, setImageInput] = useState<string>('');

  useEffect(() => {
    if (editingTour) {
      form.setFieldsValue(editingTour);
      setImages(editingTour.imagedetail);
      setHighlights(editingTour.highlights);
    } else {
      form.resetFields();
      setImages([]);
      setHighlights([]);
    }
  }, [editingTour, form]);

  const onFinish = (values: Omit<TourData, 'id' | 'imagedetail' | 'highlights'>) => {
    const newTour: TourData = editingTour
      ? { ...editingTour, ...values, departure_dates: Array.isArray(values.departure_dates) ? values.departure_dates : [values.departure_dates], imagedetail: images, highlights }
      : { id: String(Date.now()), ...values, departure_dates: Array.isArray(values.departure_dates) ? values.departure_dates : [values.departure_dates], imagedetail: images, highlights };
    
    onAddTour(newTour);
    onClose();
  };

  const handleAddHighlight = () => {
    if (highlightInput && !highlights.includes(highlightInput)) {
      setHighlights((prev) => [...prev, highlightInput]);
      setHighlightInput('');
    }
  };

  const handleAddImage = () => {
    if (imageInput && !images.includes(imageInput)) {
      setImages((prev) => [...prev, imageInput]);
      setImageInput('');
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
      <Form.Item name="departure_dates" label="Departure Dates" rules={[{ required: true, message: 'Please enter the departure dates' }]}>
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
        <Input />
      </Form.Item>
      <Form.Item name="discounted_price" label="Discounted Price" rules={[{ required: true, message: 'Please enter the discounted price' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="departure_date" label="Departure Date" rules={[{ required: true, message: 'Please enter the departure date' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="guest_count" label="Guest Count" rules={[{ required: true, message: 'Please enter the guest count' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="hotline_number" label="Hotline Number" rules={[{ required: true, message: 'Please enter the hotline number' }]}>
        <Input />
      </Form.Item>

      {/* Image Carousel Input */}
      <Form.Item label="Image Details">
        <Input
          placeholder="Enter image URL"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          onPressEnter={handleAddImage}
        />
                <Button type="dashed" onClick={handleAddImage} style={{ marginTop: '8px' }}>
          Add Image
        </Button>
        <Carousel autoplay style={{ marginTop: '16px' }}>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Tour Image ${index + 1}`} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
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