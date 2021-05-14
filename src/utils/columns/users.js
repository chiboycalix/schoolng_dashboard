import React from 'react';
import moment from 'moment';

export const usersColumns = (properties, setRecord) => [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: "200px",
  },
  {
    title: 'School',
    dataIndex: 'institution',
    key: 'institution',
  },
  {
    title: 'Department',
    dataIndex: 'dept',
    key: 'dept',
  },
  {
    title: 'Date Joined',
    dataIndex: 'dateJoined',
    key: 'dateJoined',
    width: "200px",
    render: (dataJoined) => {
      return <p>{moment(dataJoined).format('DD-MM-YYYY')}</p>
    }
  },
]