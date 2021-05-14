import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import pagesIcon from '../../../assets/images/page.svg';

const PagesCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Total Pages</h1>
      <div className="icon-count">
        <img src={pagesIcon} alt="users.icon" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default PagesCard