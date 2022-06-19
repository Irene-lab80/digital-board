import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const RegistrationPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
      autoComplete="off"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Введите имя!' }]}
      >
        <Input placeholder="Имя" />
      </Form.Item>

      <Form.Item
        name="lastname"
        rules={[{ required: true, message: 'Введите фамилию!' }]}
      >
        <Input placeholder="Фамилия" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }, { min: 5, message: 'Пароль должен быть не менее 8 символов.' }]}
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
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
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

export default RegistrationPage;
