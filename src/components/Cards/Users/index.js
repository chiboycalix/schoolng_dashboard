import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import usersIcon from '../../../assets/images/users.svg';

const UsersCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Total Users</h1>
      <div className="icon-count">
        <img src={usersIcon} alt="users.icon" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default UsersCard