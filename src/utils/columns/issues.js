import React from 'react';
import moment from 'moment';

export const issuesColumns = (properties, setRecord) => [
  {
    title: 'User ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Issue details',
    dataIndex: 'title',
    key: 'title',
    width: "200px",
  },
  {
    title: 'Suggestion',
    dataIndex: 'suggestion',
    key: 'suggestion',
  },
  {
    title: 'Date',
    dataIndex: 'time',
    key: 'time',
    width: "200px",
    render: (time) => {
      return <p>{moment(time).format('llll')}</p>
    }
  },
]