import React from 'react';
import { Card, Typography, Carousel, Row, Col, Button } from 'antd';
import './styles.css';

type ComboProps = {
  image: string;
  price: string;
  onClick?: () => void;
};

type CarouselProps = {
  combos: ComboProps[];
};

const PopularCombos: React.FC<ComboProps> = ({ image, price, onClick }) => {
  return (
    <Card hoverable className="combo" cover={<img alt={price} src={image} className="combo-image" />}>
      <div className="combo-details">
        <div className="combo-footer">
          <Typography.Text className="combo-price">Chỉ từ {price}đ</Typography.Text>
          <Button type="primary" onClick={onClick} className="combo-button">Đặt ngay</Button>
        </div>
      </div>
    </Card>
  );
};

const ComboCarousel: React.FC<CarouselProps> = ({ combos }) => {
  const chunkSize = 3;
  const comboChunks = Array(Math.ceil(combos.length / chunkSize))
    .fill(null)
    .map((_, index) => combos.slice(index * chunkSize, index * chunkSize + chunkSize));

  return (
    <>
      <div className="combo-carousel-mobile">
        <Carousel autoplay autoplaySpeed={3000}>
          {combos.map((combo, index) => (
            <div key={index}>
              <PopularCombos image={combo.image} price={combo.price} onClick={combo.onClick} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="combo-carousel-desktop">
        <Carousel autoplay autoplaySpeed={3000}>
          {comboChunks.map((chunk, index) => (
            <div key={index}>
              <Row gutter={[16, 16]}>
                {chunk.map((combo, subIndex) => (
                  <Col key={subIndex} span={8}>
                    <PopularCombos image={combo.image} price={combo.price} onClick={combo.onClick} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ComboCarousel;
