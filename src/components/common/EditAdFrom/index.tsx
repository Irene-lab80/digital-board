import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';

const EditAdFrom = () => {
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      form={form}
      layout="vertical"
                >
      <Form.Item label="Название товара">
        <Input placeholder="Введите название товара" />
      </Form.Item>
      <Form.Item style={{ width: '48%' }} label="Стоимость">
        <Input placeholder="Введите стоимость" />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Описание">
        <Input.TextArea placeholder="Введите текст (до 3000 символов)" style={{ resize: 'none', height: '128px' }} />
      </Form.Item>
      <Form.Item
        name="Upload"
        label="Фотография"
        valuePropName="fileList"
        getValueFromEvent={normFile}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Выбрать файл</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default EditAdFrom;
