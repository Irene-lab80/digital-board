/* eslint-disable max-len */
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import makeRequest from '../../../network';
import style from './FormAuth.module.scss';
import { SetUserEmailAction, SetUserNameAction } from '../../../store/auth/actions';
import CustomButton from '../CustomButton';

const FormAuth: React.FC = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  async function CheckUser(values: any) {
    // e.preventDefault();
    const USERS = await makeRequest({ url: '/users' });
    console.log(`Веденные данные: ${values.email}, ${values.password}`);
    const INPUT_EMAIL = values.email;
    const INPUT_PASSWORD = values.password;

    USERS.forEach((el: any) => {
      if (el.password === INPUT_PASSWORD && el.email === INPUT_EMAIL) {
        dispatch(SetUserNameAction(`${el.firstname} ${el.lastname}`));
        dispatch(SetUserEmailAction(el.email));

        // localStorage.setItem('currentloggedin', el.email);
      } else if (el.email !== INPUT_EMAIL) {
        setErrorMessage('Пользователя с указанным email не существует!');
      } else if (el.password !== INPUT_EMAIL && el.email === INPUT_EMAIL) {
        setErrorMessage('Некорректный пароль!');
      }
    });
  }

  return (
    <Form
      name="auth-form"
      initialValues={{ remember: true }}
      onFinish={(e) => CheckUser(e)}
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
        <Input className={style.input} type="text" placeholder="Email" name="email" />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}>
        <Input.Password className={style.input} type="text" placeholder="Password" name="password" />
      </Form.Item>

      <Form.Item>
        <NavLink className={style.forgotPassword} to="/get-pass">Забыли пароль?</NavLink>
      </Form.Item>

      {errorMessage && (
        <p className={style.error}>
          {' '}
          {errorMessage}
          {' '}
        </p>
      )}

      <Form.Item>
        <CustomButton buttonStyle="btm--primary" type="submit" onClick={() => {}}>Войти</CustomButton>
      </Form.Item>
    </Form>
  );
};

export default FormAuth;
