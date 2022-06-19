import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const FormReg: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const validatePassword = (rule: any, value: any, callback: any) => {
    // at least one small letter, at least one capital, at least 8 digits, no special symbols
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (
      !value.match(re)
    ) {
      callback('Пароль должен содержать не менее 8 символов, оба регистра и цифры!');
    } else {
      callback();
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Введите имя!' }, { max: 25, message: 'Имя не должно быть длиннее 25 символов' }]}
      >
        <Input placeholder="Имя" />
      </Form.Item>

      <Form.Item
        name="lastname"
        rules={[{ required: true, message: 'Введите фамилию!' }, { max: 25, message: 'Фамилия не должна быть длиннее 25 символов' }]}
      >
        <Input placeholder="Фамилия" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Невалидный E-mail!',
          },
          {
            required: true,
            message: 'Введите E-mail!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' },
          // { min: 5, message: 'Пароль должен быть не менее 8 символов.' },
          { validator: validatePassword }]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item
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
        ]}
      >
        <Input.Password placeholder="Повторите пароль" />
      </Form.Item>

      <Form.Item>
        <button className="btn btn--primary" type="submit" onClick={() => {}}>Создать аккаунт</button>
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
    </Form>

  );
};

export default FormReg;
