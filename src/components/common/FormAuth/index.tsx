import React from 'react';
import { Form, Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetUserNameAction } from '../../../store/actions';
import style from './FormAuth.module.scss';

const FormAuth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(SetUserNameAction(values.email));
    navigate('/', { replace: true });
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
        className={style.inputWrapper}
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
        <Input placeholder="Email" className={style.input} />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}>
        <Input.Password placeholder="Password" className={style.input} />
      </Form.Item>

      <Form.Item>
        <NavLink className={style.forgotPassword} to="/get-pass">Забыли пароль?</NavLink>
      </Form.Item>
      <Form.Item>
        <button className={style.button} type="submit">Войти</button>
      </Form.Item>
      {/* <Form.Item>
        <button className="btn btn--primary" type="submit" onClick={() => {}}>Войти</button>
      </Form.Item> */}
    </Form>
  );
};

export default FormAuth;
