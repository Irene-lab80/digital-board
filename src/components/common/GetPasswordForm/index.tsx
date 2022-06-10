import React from 'react';
import { Form, Input, Button } from 'antd';

const GetPasswordForm: React.FC = () => {
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
      autoComplete="off">
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Выслать ссылку
        </Button>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        Выполняя вход в сервис, вы подтверждаете, что ознакомились с документами
        {' '}
        <a href="!#">«политика конфидициальности»</a>
        ,
        {' '}
        <a href="!#">«согласие на обработку персональных данных»</a>
        {' '}
        и
        {' '}
        <a href="!#">«пользовательское соглашение»</a>
        {' '}
        и согласны с ними.
      </Form.Item>
    </Form>
  );
};

export default GetPasswordForm;
