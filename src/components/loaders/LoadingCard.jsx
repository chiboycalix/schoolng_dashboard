import * as React from 'react';
import { Card } from 'antd';

const LoadingCard = () => (
  <Card
    bordered={false}
    title={null}
    style={{ height: '100%' }}
    loading={true}
  >
    <h4>Loading...Please wait</h4>
  </Card>
);

export default LoadingCard;
