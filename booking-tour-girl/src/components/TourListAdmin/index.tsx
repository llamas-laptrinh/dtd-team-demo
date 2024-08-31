import React from 'react';
import { List, Button, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

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
  return (
    <List
      itemLayout="vertical"
      dataSource={tours}
      renderItem={tour => (
        <List.Item
          actions={[
            <Button icon={<EditOutlined />} onClick={() => onEditTour(tour)} />,
            <Button icon={<DeleteOutlined />} danger onClick={() => onDeleteTour(tour.id)} />,
          ]}
        >
          <List.Item.Meta
            title={tour.title}
            description={
              <>
                <Text strong>Location:</Text> {tour.location} <br />
                <Text strong>Duration:</Text> {tour.duration} <br />
                <Text strong>Code:</Text> {tour.code} <br />
                <Text strong>Departure Dates:</Text> {tour.departure_dates.join(', ')} <br />
                <Text strong>Transport:</Text> {tour.transport} <br />
                <Text strong>Highlights:</Text> {tour.highlights.join(', ')} <br />
                <Text strong>Description:</Text> {tour.description} <br />
                <Text strong>Contact Info:</Text> {tour.contact_info} <br />
                <Text strong>Tour Program:</Text> {tour.tour_program} <br />
                <Text strong>Services Included:</Text> {tour.services_included} <br />
                <Text strong>Regulations:</Text> {tour.regulations} <br />
                <Text strong>Original Price:</Text> {tour.original_price} VND <br />
                <Text strong>Discounted Price:</Text> {tour.discounted_price} VND <br />
                <Text strong>Departure Date:</Text> {tour.departure_date} <br />
                <Text strong>Guest Count:</Text> {tour.guest_count} <br />
                <Text strong>Hotline Number:</Text> {tour.hotline_number} <br />
              </>
            }
          />
          <Space direction="vertical">
            <Text strong>Images:</Text>
            {tour.imagedetail.map((url, index) => (
              <img key={index} src={url} alt={`Tour Image ${index + 1}`} style={{ width: '100px', marginRight: '10px' }} />
            ))}
          </Space>
        </List.Item>
      )}
    />
  );
};

export default TourList;