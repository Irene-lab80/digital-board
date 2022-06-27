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
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  // async function handleSubmit(e: any) {
  //   // e.preventDefault();
  //   await makeRequest({ url: 'login', method: 'POST', data: formData });
  //   console.log(formData);
  // }

  // function handleChange(e: any) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    console.log('Success:', values);
    if (values.email === 'login@login.com' && values.password === 'password') {
      dispatch(SetUserNameAction(values.email));
    } else { alert('Неверный логин или пароль'); }
  };

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
        {/* <Input className={style.input} type="text" placeholder="Email" name="email" onChange={(e) => handleChange(e)} /> */}
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}>
        <Input className={style.input} type="text" placeholder="Password" name="password" />
        {/* <Input className={style.input} type="text" placeholder="Password" name="password" onChange={(e) => handleChange(e)} /> */}
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

// const FormAuth = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     await makeRequest({ url: 'auth/login', method: 'POST', data: formData });
//     console.log(formData);
//   }

//   function handleChange(e: any) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   return (
//     <div>
//       <h1>Login Form</h1>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input type="text" placeholder="Email" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
//         <input type="text" placeholder="Password" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
//         <button className="login-btn" type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default FormAuth;
