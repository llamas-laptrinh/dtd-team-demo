import React, { useState, useEffect } from 'react';
import { Button, Layout, Typography, Modal, Row, Col, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TourForm from '../../components/TourFormAdmin';
import TourList from '../../components/TourListAdmin';

const { Title } = Typography;
const { Content } = Layout;

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

const TourAdmin: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [tours, setTours] = useState<TourData[]>([]);
  const [editingTour, setEditingTour] = useState<TourData | null>(null);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/tours');
      const data = await response.json();
      setTours(data);
    } catch (error) {
      message.error('Error fetching tour data.');
    }
  };

  const handleAddTour = (newTour: TourData) => {
    if (editingTour) {
      setTours(tours.map(tour => (tour.id === newTour.id ? newTour : tour)));
    } else {
      setTours([...tours, newTour]);
    }
    setShowForm(false);
    setEditingTour(null);
    fetchTours();
  };

  const handleEditTour = (tour: TourData) => {
    setEditingTour(tour);
    setShowForm(true);
  };

  const handleDeleteTour = (id: string) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
          <Title level={3}>Tour Management Dashboard</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setShowForm(true)}>
            Add New Tour
          </Button>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Card title="Tours">
              <TourList tours={tours} onEditTour={handleEditTour} onDeleteTour={handleDeleteTour} />
            </Card>
          </Col>
          <Col span={8}>
            <Modal
              title={editingTour ? 'Edit Tour' : 'Add New Tour'}
              visible={showForm}
              footer={null}
              onCancel={() => setShowForm(false)}
            >
              <TourForm onClose={() => setShowForm(false)} onAddTour={handleAddTour} editingTour={editingTour} />
            </Modal>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default TourAdmin;