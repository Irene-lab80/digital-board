/* eslint-disable max-len */
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import makeRequest from '../../../network';
// import { useDispatch } from 'react-redux';
// import { SetUserNameAction } from '../../../store/auth/actions';
import style from './FormAuth.module.scss';
import { SetUserNameAction } from '../../../store/auth/actions';

const FormAuth: React.FC = () => {
  async function handleSubmit(values: any) {
    // e.preventDefault();
    // @ts-ignore
    await makeRequest({ url: '/auth/login', method: 'POST', data: values }); // params: 'Authorization: Bearer <ACCESS_TOKEN>' ??
    console.log(values);
    alert('Успешно отправлено?');
  }

  // Код чтобы залогиниться, который работает
  // const dispatch = useDispatch();
  // const handleSubmit = (values: any) => {
  //   console.log('Success:', values);
  //   if (values) {
  // dispatch(SetUserNameAction(values.email));
  //   }
  // };

  return (
    <Form
      name="auth-form"
      initialValues={{ remember: true }}
      onFinish={(e) => handleSubmit(e)}
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
        <Input className={style.input} type="text" placeholder="Password" name="password" />
      </Form.Item>

      <Form.Item>
        <NavLink className={style.forgotPassword} to="/get-pass">Забыли пароль?</NavLink>
      </Form.Item>

      <Form.Item>
        <button className={style.button} type="submit">Войти</button>
      </Form.Item>
    </Form>
  );
};

export default FormAuth;
