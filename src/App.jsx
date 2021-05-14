import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import moduleHelpers from './utils/helpers/moduleHelper';
import ModuleLoading from './components/loaders/ModuleLoading.jsx';
import PrivateRoute from './components/HOC/PrivateRoute.jsx';
import { AuthProvider } from './contexts/authContext';
import { UserProvider } from './contexts/userContext';

const NotFoundPage = React.lazy(() => moduleHelpers.retryImport(() => import('./pages/404/404.jsx')));
const AppLayout = React.lazy(() => moduleHelpers.retryImport(() => import('./components/layout/AppLayout.jsx')));
const LoginPage = React.lazy(() => moduleHelpers.retryImport(() => import('./pages/login')));

const App = () => {

  return (
    <AuthProvider>
      <UserProvider>
        <React.Suspense fallback={<ModuleLoading />}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={LoginPage} exact={true} />
              <PrivateRoute path="/" component={AppLayout} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </React.Suspense>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
