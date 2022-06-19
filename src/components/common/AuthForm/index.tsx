import React from 'react';
import { Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetUserNameAction } from '../../../store/actions';
import style from './AuthForm.module.scss';

const AuthForm: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(SetUserNameAction(values.email));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Некорректный E-mail!',
          },
          {
            required: true,
            message: 'Введите E-mail!',
          },
        ]}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}>
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item>
        <NavLink className={style.forgotPassword} to="/get-pass">Забыли пароль?</NavLink>
      </Form.Item>

      {/* TODO: change to custom btn? */}
      <Form.Item>
        <button className="btn btn--primary" type="submit" onClick={() => {}}>Войти</button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
