import * as React from 'react';
import { TransactionOutlined } from '@ant-design/icons';
import moduleHelpers from '../../utils/helpers/moduleHelper';

const OverviewRoute = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/overview')));
const Admin = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/admin')));
const Campaigns = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/campaign')));
const Gists = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/gist')));
const Groups = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/groups')));
const Materials = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/materials')));
const Pages = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/pages')));
const Schools = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/schools')));
const Trends = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/trends')));
const Users = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/users')));

import { useRoleMap } from './userRoleMap';

const routes = [
  {
    path: '/',
    name: 'Overview',
    icon: <TransactionOutlined />,
    component: OverviewRoute,
    breadcrumbName: 'OverviewRoute',
    authority: ['admin']
  },
  {
    path: '/users',
    name: 'Users',
    icon: <TransactionOutlined />,
    component: Users,
    breadcrumbName: 'Users',
    authority: ['admin']
  },
  {
    path: '/pages',
    name: 'Pages',
    icon: <TransactionOutlined />,
    component: Pages,
    breadcrumbName: 'Groups',
    authority: ['admin']
  },
  {
    path: '/gists',
    name: 'Gists',
    icon: <TransactionOutlined />,
    component: Gists,
    breadcrumbName: 'Gists',
    authority: ['admin']
  },
  {
    path: '/material',
    name: 'Material',
    icon: <TransactionOutlined />,
    component: Materials,
    breadcrumbName: 'Groups',
    authority: ['admin']
  },

  {
    path: '/campaigns',
    name: 'Campaigns',
    icon: <TransactionOutlined />,
    component: Campaigns,
    breadcrumbName: 'Campaigns',
    authority: ['admin']
  },
  {
    path: '/groups',
    name: 'Groups',
    icon: <TransactionOutlined />,
    component: Groups,
    breadcrumbName: 'Groups',
    authority: ['admin']
  },
  {
    path: '/schools',
    name: 'Schools',
    icon: <TransactionOutlined />,
    component: Schools,
    breadcrumbName: 'Schools',
    authority: ['admin']
  },
  {
    path: '/trends',
    name: 'Trends',
    icon: <TransactionOutlined />,
    component: Trends,
    breadcrumbName: 'Trends',
    authority: ['admin']
  },
  {
    path: '/admin',
    name: 'Admin',
    icon: <TransactionOutlined />,
    component: Admin,
    breadcrumbName: 'Admin',
    authority: ['admin']
  },
];

export const routesByRole = () => {
  // get user role from local storage and parse it as an integer
  const userRole = parseInt(localStorage.getItem('schoolnNGRole'));

  // return the role description based on the role id
  const role = useRoleMap(1);

  let routeList = [];
  // map through the routes and return based on the role that can access such route
  routes.map((route) => {
    if (route?.authority?.includes(role)) {
      routeList.push(route);
    }
  });
  return routeList
}
