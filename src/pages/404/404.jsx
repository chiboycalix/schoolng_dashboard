import * as React from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

const NotFoundPage = (props) => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    style={{ fontFamily: 'Poppins, sans-serif' }}
    extra={
      <Button type="primary" onClick={() => props.history.push('/')}>
        Back Home
      </Button>
    }
  />
);

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default NotFoundPage;
