import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import onlineUsersIcon from '../../../assets/images/onlineusers.svg';

const OnlineUsersCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Users Online</h1>
      <div className="icon-count">
        <img src={onlineUsersIcon} alt="onlineUsersIcon" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default OnlineUsersCard