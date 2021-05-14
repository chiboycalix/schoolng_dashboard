import React from 'react';
import './styles.scss'
import likeIcon from '../../assets/images/like.svg';
import commentIcon from '../../assets/images/comment.svg';
import retweetIcon from '../../assets/images/retweet.svg';
import munaIcon from '../../assets/images/muna.png';

export const overviewColumns = (properties, setRecord) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => {
      return (
        <div className="user-img">
          <img src={munaIcon} alt="munaIcon" />
          {name}
        </div>
      )
    },
  },
  {
    title: 'Likes',
    dataIndex: 'likes',
    key: 'likes',
    render: (likes) => {
      return (
        <div className="img-text-wrapper">
          <img src={likeIcon} alt="like" />
          {likes}
        </div>
      )
    },
  },
  {
    title: 'Comment',
    dataIndex: 'comments',
    key: 'comments',
    render: (comments) => {
      return (
        <div className="img-text-wrapper">
          <img src={commentIcon} alt="commentIcon" />
          {comments}
        </div>
      )
    },
  },
  {
    title: 'Register',
    dataIndex: 'register',
    key: 'register',
    render: (register) => {
      return (
        <div className="img-text-wrapper">
          <img src={retweetIcon} alt="retweetIcon" />
          {register}
        </div>
      )
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return (
        <p className={`${status === 'online' ? 'online' : 'offline'}`}>{status}</p>
      )
    },
  },
];

export const dataSource = [
  {
    key: '1',
    name: 'Muna Johnson',
    likes: 32,
    comments: 509,
    register: 4,
    status: 'online'
  },
  {
    key: '2',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'offline'
  },
  {
    key: '3',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'offline'
  },
  {
    key: '4',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'online'
  },
  {
    key: '5',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'online'
  },
  {
    key: '6',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'offline'
  },
  {
    key: '7',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'offline'
  },
  {
    key: '8',
    name: 'Mike Adenuga',
    likes: 32,
    comments: 15000,
    register: 8,
    status: 'online'
  },
];
