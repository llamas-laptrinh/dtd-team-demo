import React from 'react';
import { Card, Typography } from 'antd';

type ArticleProps = {
  image: string;
  title: string;
};

const ArticleCard: React.FC<ArticleProps> = ({ image, title }) => {
  return (
    <Card hoverable className="article-card" cover={<img alt={title} src={image} className="article-image" />}>
      <div className="ant-card-body article-details">
        <Typography.Text className="article-title">{title}</Typography.Text>
      </div>
    </Card>
  );
};

export default ArticleCard;
