import * as React from 'react';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes, { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { notification } from 'antd';
import SchoolnWhiteLogo from '../../assets/images/logoWhite.png'

import ModuleLoading from '../loaders/ModuleLoading.jsx';
import AppFooter from './AppFooter.jsx';
import NotFoundPage from '../../pages/404/404.jsx';
import AppHeaderRight from './AppHeaderRight.jsx';

import { routesByRole } from '../../config/routes/routes.jsx';

import './styles/app-layout.scss';


const AppLayout = (props) => {
  const [events] = React.useState(['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'])
  const [status, setStatusAway] = React.useState(false)
  React.useEffect(() => {
    document.title = 'NIBSS | GSI';

    if (props.location.pathname === '/') {
      props.history.push('/');
    }
  }, []);

  React.useEffect(() => {
    for (var i in events) {
      window.addEventListener(events[i], resetTimeout);
    }
    setTimeoutT()
    return () => {
      clearTimeoutT()
    }
  }, [])

  let warnTimeout;
  let logoutTimeout;
  const clearTimeoutT = () => {
    if (warnTimeout) {
      clearTimeout(warnTimeout)
    }
    if (logoutTimeout) {
      clearTimeout(logoutTimeout)
    }
  }

  const setTimeoutT = () => {
    warnTimeout = setTimeout(warn, 600000);
    logoutTimeout = setTimeout(logout, 630000);
  }

  const resetTimeout = () => {
    clearTimeoutT();
    setTimeoutT();
    setStatusAway(false)
  }

  const warn = () => {
    setStatusAway(true)
    notification['warn']({
      message: 'Inactivity',
      description:
        'You have been inactive for a while now. You would be automatically logged out in 30 seconds time'
    });
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
    destroy();
  }

  const destroy = () => {
    clearTimeoutT();

    for (var i in events) {
      window.removeEventListener(events[i], resetTimeout);
    }
  }

  return (
    <React.Fragment>
      <ProLayout
        style={{ height: '100vh' }}
        title={<p style={{ color: "#EB5933", marginTop: "3.5rem", fontSize: "2rem" }}>Schooln.ng</p>}

        itemRender={(route, params, receivedRoutes, paths) => {
          const first = receivedRoutes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        logo={SchoolnWhiteLogo}
        footerRender={() => AppFooter}
        navTheme="light"
        menuDataRender={() => {
          return routesByRole();
        }}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        rightContentRender={(layoutProps) => (
          <AppHeaderRight
            history={layoutProps.history}
            status={status}
          />
        )
        }
        {...props}
      >
        <React.Suspense fallback={<ModuleLoading />}>
          <Switch>
            {
              routesByRole().map((route) => {
                return !route.routes ? (
                  <Route
                    name={route.name}
                    key={route.name}
                    path={route.path}
                    exact={true}
                    render={(routeProps) => {
                      return <route.component {...routeProps} />
                    }}
                  />
                ) : route.routes.map((app) => (
                  <Route
                    name={app.name}
                    key={app.name}
                    path={app.path}
                    exact={true}
                    render={(routeProps) => (
                      <app.component {...routeProps} />
                    )}
                  />
                ))
              }
              )
            }
            <Route path={'*'} component={NotFoundPage} />
          </Switch>
        </React.Suspense>
      </ProLayout>
      {/* <SettingDrawer
        settings={props.ui.layoutSettings}
        hideHintAlert={true}
        hideCopyButton={true}
        hideColors={true}
      /> */}
    </React.Fragment>
  );
};

AppLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  auth: shape({
    userInfo: shape({
      user: shape({
        role: shape({
          name: string,
        }),
      }),
    }),
  }),
};

// AppLayout.defaultProps = {
//   history: {
//     push: (path) => window.location(path),
//   },
// };

// const mapStateToProps = (state) => ({
//   ui: state.ui,
//   auth: state.auth,
// });

// const mapDispatchToProps = {
// };

export default AppLayout;
