import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './styles/module-loading.scss';

const ModuleLoading = () => (
  <div className="module-loading">
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: '10.5rem', color: '#EB5933' }} />}
    />
    <p style={{ fontSize: '1.8rem', marginTop: '2rem' }}>
      Loading... Please hold on
    </p>
  </div>
);

export default ModuleLoading;
