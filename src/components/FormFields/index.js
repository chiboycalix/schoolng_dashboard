import React from 'react';
import {
  Button, Form, Input, Select,
} from 'antd';
import './styles/submit-btn.scss';

// email address
export const EmailField = (
  inputSize,
  disabled = false,
  required = true,
) => (
  <Form.Item
    label="Email"
    name="email"
    validateTrigger={['onChange', 'onBlur']}
    hasFeedback
    rules={[
      ...(required
        ? [{ required: true, message: "Please input your email" }]
        : []),
      { type: 'email', message: 'Please input a valid email' },
    ]}
  >
    <Input size={inputSize} className="formInputElement" placeholder="Enter Email address" disabled={disabled} />
  </Form.Item>
);

// passsword field
export const PasswordField = (inputSize, disabled = false, required = true) => {
  return (
    <Form.Item
      label="Password"
      name="password"
      validateTrigger={['onChange', 'onBlur']}
      hasFeedback
      rules={[
        ...(required
          ? [{ required: true, message: "Please input your password" }]
          : []),
      ]}
    >
      <Input.Password size={inputSize} className="formInputElement" placeholder="Enter your password" disabled={disabled} />
    </Form.Item>
  )
}


// submit Button
export const SubmitButton = (properties, buttonSize, buttonText, loading) => (
  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      className="submitBtn"
      size={buttonSize}
      loading={loading}
    >
      {buttonText}
    </Button>
  </Form.Item>
);

// search field
export const SearchField = (inputSize, disabled = false, required = true) => {
  return (
    <Form.Item
      label=""
      name="search"
      validateTrigger={['onChange', 'onBlur']}
      hasFeedback
      rules={[
        ...(required
          ? [{ required: true, message: "Please input your password" }]
          : []),
      ]}
    >
      <Input size={inputSize} className="formInputElement" placeholder="Search by schools, user name" disabled={disabled} />
    </Form.Item>
  )
}