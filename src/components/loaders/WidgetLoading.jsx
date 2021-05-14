import { Spin } from 'antd';
import * as React from 'react';

const WidgetLoading = () => (
  <div style={{
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
  }}>
    <Spin style={{ alignSelf: 'center' }} />
  </div>
);

export default WidgetLoading;
