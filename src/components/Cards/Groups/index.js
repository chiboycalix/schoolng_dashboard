import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import GroupsIcon from '../../../assets/images/groups.svg';

const GroupsCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Total Groups</h1>
      <div className="icon-count">
        <img src={GroupsIcon} alt="GroupsCard" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default GroupsCard