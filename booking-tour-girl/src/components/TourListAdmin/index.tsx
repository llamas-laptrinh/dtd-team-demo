import React, { useEffect, useState } from 'react';
import { List, Button, Modal, Form, Input, Carousel, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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

interface TourListProps {
  tours: TourData[];
  onEditTour: (tour: TourData) => void;
  onDeleteTour: (id: string) => void;
}

const TourList: React.FC<TourListProps> = ({ tours, onEditTour, onDeleteTour }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTour, setEditingTour] = useState<TourData | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [imageInput, setImageInput] = useState<string>('');
  const [highlights, setHighlights] = useState<string[]>([]);
  const [highlightInput, setHighlightInput] = useState<string>('');
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingTour) {
      setImages(editingTour.imagedetail);
      setHighlights(editingTour.highlights);
      form.setFieldsValue(editingTour);
    }
  }, [editingTour, form]);

  const handleEditTour = async (values: Omit<TourData, 'id' | 'imagedetail' | 'highlights'>) => {
    if (editingTour) {
      const updatedTour: TourData = {
        ...editingTour,
        ...values,
        imagedetail: images,
        highlights: highlights,
      };

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/tours/${updatedTour.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTour),
        });

        if (response.ok) {
          message.success('Tour updated successfully!');
          setIsModalVisible(false);
          onEditTour(updatedTour); // Gọi hàm onEditTour
        } else {
          message.error('Failed to update the tour.');
        }
      } catch (error) {
        console.error('Error updating tour:', error);
        message.error('Error occurred while updating the tour.');
      }
    }
  };

  const handleDeleteTour = async (id: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tours/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message.success('Tour deleted successfully!');
        onDeleteTour(id); // Gọi hàm onDeleteTour
      } else {
        message.error('Failed to delete the tour.');
      }
    } catch (error) {
      console.error('Error deleting tour:', error);
      message.error('Error occurred while deleting the tour.');
    }
  };

  const showEditModal = (tour: TourData) => {
    setEditingTour(tour);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingTour(null);
    setImages([]);
    setHighlights([]);
  };

  const handleAddImage = () => {
    if (imageInput && !images.includes(imageInput)) {
      setImages((prev) => [...prev, imageInput]);
      setImageInput('');
    }
  };

  const handleRemoveImage = (url: string) => {
    setImages(images.filter(image => image !== url));
  };

  const handleAddHighlight = () => {
    if (highlightInput && !highlights.includes(highlightInput)) {
      setHighlights((prev) => [...prev, highlightInput]);
      setHighlightInput('');
    }
  };

  const handleRemoveHighlight = (highlight: string) => {
    setHighlights(highlights.filter(item => item !== highlight));
  };

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={tours}
        renderItem={tour => (
          <List.Item
            key={tour.id}
            actions={[
              <Button icon={<EditOutlined />} onClick={() => showEditModal(tour)} />,
              <Button icon={<DeleteOutlined />} danger onClick={() => handleDeleteTour(tour.id)} />,
            ]}
          >
            <List.Item.Meta
              title={tour.title}
              description={
                <>
                  <p><strong>Location:</strong> {tour.location}</p>
                  <p><strong>Duration:</strong> {tour.duration}</p>
                  <p><strong>Code:</strong> {tour.code}</p>
                  <p><strong>Departure Dates:</strong> {tour.departure_dates.join(', ')}</p>
                  <p><strong>Transport:</strong> {tour.transport}</p>
                  <p><strong>Highlights:</strong> {tour.highlights.join(', ')}</p>
                  <p><strong>Description:</strong> {tour.description}</p>
                  <p><strong>Contact Info:</strong> {tour.contact_info}</p>
                  <p><strong>Tour Program:</strong> {tour.tour_program}</p>
                  <p><strong>Services Included:</strong> {tour.services_included}</p>
                  <p><strong>Regulations:</strong> {tour.regulations}</p>
                  <p><strong>Original Price:</strong> {tour.original_price} VND</p>
                  <p><strong>Discounted Price:</strong> {tour.discounted_price} VND</p>
                  <p><strong>Departure Date:</strong> {tour.departure_date}</p>
                  <p><strong>Guest Count:</strong> {tour.guest_count}</p>
                  <p><strong>Hotline Number:</strong> {tour.hotline_number}</p>
                </>
              }
            />
            <Space direction="vertical">
              <p><strong>Images:</strong></p>
              {tour.imagedetail.map((url, index) => (
                <img key={index} src={url} alt={`Tour Image ${index + 1}`} style={{ width: '100px', marginRight: '10px' }} />
              ))}
            </Space>
          </List.Item>
        )}
      />

      <Modal
        title="Edit Tour"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {editingTour && (
          <Form form={form} layout="vertical" onFinish={handleEditTour}>
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
                  <div key={index} style={{ position: 'relative' }}>
                    <img src={url} alt={`Tour Image ${index + 1}`} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
                    <Button 
                      style={{ position: 'absolute', top: 10, right: 10 }} 
                      danger 
                      onClick={() => handleRemoveImage(url)}>
                      Remove
                    </Button>
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
                renderItem={(item) => (
                  <List.Item actions={[<Button danger onClick={() => handleRemoveHighlight(item)}>Remove</Button>]}>
                    {item}
                  </List.Item>
                )}
                style={{ marginTop: '16px' }}
              />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
                <Button onClick={handleCancel}>
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default TourList;