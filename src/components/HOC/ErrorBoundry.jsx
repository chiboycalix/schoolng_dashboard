import * as React from 'react';
import { Button, Result } from 'antd';
import { node } from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error!', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Oops! Something unexpected happened, we have received a notification and will be working on it"
          extra={
            <Button type="primary" onClick={() => {
              window.location.reload();
              return false;
            }}>
              Reload
            </Button>
          }
        />
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: node,
};

export default ErrorBoundary;
