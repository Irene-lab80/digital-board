import React, { useState } from 'react';
import makeRequest from '../../../network';
// import { Form, Input } from 'antd';
// import { NavLink } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { SetUserNameAction } from '../../../store/auth/actions';
// import style from './FormAuth.module.scss';

// const FormAuth: React.FC = () => {
//   // const dispatch = useDispatch();

//   // const [formData, setFormData] = useState({
//   //   email: '',
//   //   password: ''
//   // });

//   function handleSubmit(values: any) {
//     fetch('https://soapy-auspicious-lancer.glitch.me/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(values.user)
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     // .then((data) => dispatch(SetUserNameAction(data.email)));
//   }

//   // function handleChange(e: any) {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // }

//   // const onFinish = (values: any) => {
//   //   console.log('Success:', values);
//   //   if (values.email === 'login@login.com' && values.password === 'password') {
//   //     dispatch(SetUserNameAction(values.email));
//   //   } else { alert('Неверный логин или пароль'); }
//   // };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       name="auth-form"
//       initialValues={{ remember: true }}
//       onFinish={(e) => handleSubmit(e)}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off">
//       <Form.Item
//         className={style.inputWrapper}
//         name="email"
//         rules={[
//           {
//             type: 'email',
//             message: 'Некорректный E-mail!',
//           },
//           {
//             required: true,
//             message: 'Введите E-mail!',
//           },
//         ]}>
//         <Input className={style.input} type="text" placeholder="Email" name="email" />
//       </Form.Item>

//       <Form.Item
//         className={style.inputWrapper}
//         name="password"
//         rules={[{ required: true, message: 'Введите пароль!' }]}>
//         <Input className={style.input} type="text" placeholder="Password" name="password" />
//       </Form.Item>

//       <Form.Item>
//         <NavLink className={style.forgotPassword} to="/get-pass">Забыли пароль?</NavLink>
//       </Form.Item>

//       <Form.Item>
//         <button className={style.button} type="submit">Войти</button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default FormAuth;

const FormAuth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    await makeRequest({ url: 'auth/login', method: 'POST', data: formData });
    console.log(formData);
    // fetch('https://soapy-auspicious-lancer.glitch.me/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // console.log(e.data);
  }

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Login Form</h1>
      {/* @ts-ignore */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
        <input type="text" placeholder="Password" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormAuth;
