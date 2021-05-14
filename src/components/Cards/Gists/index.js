import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import GistsIcon from '../../../assets/images/logoover.png';

const GistsCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Total Gists</h1>
      <div className="icon-count">
        <img src={GistsIcon} alt="GistsIcon" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default GistsCard