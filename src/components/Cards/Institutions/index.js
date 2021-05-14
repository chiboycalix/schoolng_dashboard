import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import graduationHat from '../../../assets/images/graduation-hat.svg';
const InstitutionsCard = ({ count, loading }) => {
  return (
    <div className="card-wrapper">
      <h1>Number of Schools</h1>
      <div className="icon-count">
        <img src={graduationHat} alt="graduationHat" />
        <span>{loading ? <LoadingOutlined /> : count}</span>
      </div>
    </div>
  )
}

export default InstitutionsCard