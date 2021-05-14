import React from 'react';
import { Form, notification } from 'antd';
import Logo from '../../assets/images/logoover.png';
import { EmailField, PasswordField, SubmitButton } from '../../components/FormFields';
import './styles.scss';
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const inputSize = 'large';
const Login = () => {
  const [form] = Form.useForm();
  const { login } = useAuth()
  let history = useHistory();
  const [loading, setLoading] = React.useState(false)

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);
    try {
      if (email.includes("@schooln.ng")) {
        await login(email, password);
        history.push("/")
        setLoading(false);
        notification.success({
          message: 'Login success',
          description:
            'Login was successful',
        });
      }
    } catch (error) {
      setLoading(false);
      notification.error({
        message: 'Login Failure',
        description: error?.message
      });
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="img-logo-section">
          <img src={Logo} alt="Logo" />
          <p>School Admin Login</p>
        </div>
        <div className="form-wrapper">
          <Form
            form={form}
            onFinish={onFinish}
            hideRequiredMark
            layout="vertical"
          >
            <div className="email-wrapper">
              {
                EmailField(inputSize)
              }

            </div>

            <div className="password-wrapper">
              {
                PasswordField(inputSize)
              }
            </div>
            <div className="btn-wrapper">
              {SubmitButton(null, 'large', 'Login', loading)}
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login