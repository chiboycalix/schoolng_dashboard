import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import materialsIcon from '../../../assets/images/resources.svg';

const MaterialsCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Material Resources</h1>
      <div className="icon-count">
        <img src={materialsIcon} alt="users.icon" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default MaterialsCard