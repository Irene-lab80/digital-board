import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './FormReg.module.scss';
import makeRequest from '../../../network';
import CustomButton from '../CustomButton';

const FormReg: React.FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(values: any) {
    await makeRequest({ url: '/users', method: 'POST', data: values });
    console.log(values);
    navigate('/auth');
  }

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
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        className={style.inputWrapper}
        name="firstname"
        rules={[{ required: true, message: 'Введите имя!' }, { max: 25, message: 'Имя не должно быть длиннее 25 символов' }]}
      >
        <Input className={style.input} placeholder="Имя" name="firstname" />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="lastname"
        rules={[{ required: true, message: 'Введите фамилию!' }, { max: 25, message: 'Фамилия не должна быть длиннее 25 символов' }]}>
        <Input className={style.input} placeholder="Фамилия" name="lastname" />
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
        <Input className={style.input} placeholder="Email" name="email" />
      </Form.Item>

      <Form.Item
        className={style.inputWrapper}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' },
          { validator: validatePassword }]}>
        <Input.Password className={style.input} placeholder="Пароль" name="password" />
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
        <CustomButton buttonStyle="btm--primary" type="submit" onClick={() => {}}>Создать аккаунт</CustomButton>
      </Form.Item>
    </Form>
  );
};

export default FormReg;
