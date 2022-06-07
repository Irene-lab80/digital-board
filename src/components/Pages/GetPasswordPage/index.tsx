import React from 'react';
import { Form, Input, Button } from 'antd';

const GetPasswordPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Выслать ссылку
        </Button>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        Выполняя вход в сервис, вы подтверждаете, что ознакомились с документами
        <a href="!#">«политика конфидициальности»</a>
        ,
        <a href="!#">«согласие на обработку персональных данных»</a>
        и
        <a href="!#">«пользовательское соглашение»</a>
        {' '}
        и согласны с ними.
      </Form.Item>
    </Form>
  );
};

export default GetPasswordPage;
