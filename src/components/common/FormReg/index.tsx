import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import style from './FormReg.module.scss';

const FormReg: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  function handleSubmit(e: any) {
    // e.preventDefault();
    fetch('https://soapy-auspicious-lancer.glitch.me/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const validatePassword = (rule: any, value: any, callback: any) => {
    // at least one small letter, at least one capital, at least 8 digits, no special symbols
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (
      !value.match(re)
    ) {
      callback('Пароль должен не менее 8 символов и состоять из цифр и латинских букв обоих регистров');
    } else {
      callback();
    }
  };

  return (
    <Form
      name="reg-form"
      initialValues={{ remember: true }}
      onFinish={(e) => handleSubmit(e)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        className={style.inputWrapper}
        name="firstname"
        rules={[{ required: true, message: 'Введите имя!' }, { max: 25, message: 'Имя не должно быть длиннее 25 символов' }]}
      >
        <Input className={style.input} placeholder="Имя" value={formData.firstname} name="firstname" onChange={(e) => handleChange(e)} />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="lastname"
        rules={[{ required: true, message: 'Введите фамилию!' }, { max: 25, message: 'Фамилия не должна быть длиннее 25 символов' }]}>
        <Input className={style.input} placeholder="Фамилия" value={formData.lastname} name="lastname" onChange={(e) => handleChange(e)} />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Некорректный формат адреса электронной почты!',
          },
          {
            required: true,
            message: 'Введите E-mail!',
          },
        ]}
      >
        <Input className={style.input} placeholder="Email" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' },
          { validator: validatePassword }]}>
        <Input.Password className={style.input} placeholder="Пароль" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Повторите пароль',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли не совпадают!'));
            },
          }),
        ]}>
        <Input.Password className={style.input} placeholder="Повторите пароль" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>
          Принимаю условия
          <br />
          <a href="!#">
            Пользовательского соглашения
          </a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <button className={style.button} type="submit">Создать аккаунт</button>
      </Form.Item>
    </Form>
  );
};

export default FormReg;
