import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
// import { YMaps, Map } from 'react-yandex-maps';
import ProductMap from '../ProductMap';
import style from './EditAdFrom.module.scss';
import makeRequest from '../../../network';

/* @ts-ignore this lib is incompatible with react18 */
// const myMap = new YMaps.Map('map', {
//   center: [55.75, 37.57],
//   zoom: 9,
//   controls: ['searchControl']
// }, {
//   // Будет производиться поиск по топонимам и организациям.
//   searchControlProvider: 'yandex#search'
// });

const EditAdFrom = () => {
  async function handleSubmit(values: any) {
    const newValues = { ...values };
    newValues.userEmail = 'Ford';
    // await makeRequest({ url: '/products', method: 'POST', data: values });
    console.log(values);
    console.log(newValues);

    // TODO: remove alert
    alert('Успешно');
  }

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
      className="edit-ad-form"
      name="edit-ad-form"
      form={form}
      layout="vertical"
        // eslint-disable-next-line react/jsx-no-bind
      onFinish={handleSubmit}>

      <Form.Item className={style.btnWrapper}>
        <button className="btn btn--primary" type="submit">Сохранить</button>
      </Form.Item>

      <Form.Item name={['title']} label="Название товара" rules={[{ required: true, message: 'Введите название товара!' }]}>
        <Input className={style.input} name="title" placeholder="Введите название товара" />
      </Form.Item>

      <div className={style.df}>
        {/* TODO: add Select */}
        <Form.Item name={['tag']} style={{ width: '48%', display: 'inline-flex' }} label="Категория" rules={[{ required: true, message: 'Введите категорию товара!' }]}>
          <Input className={style.input} placeholder="Детская одежда" />
        </Form.Item>

        <Form.Item name={['price']} style={{ width: '48%', display: 'inline-flex' }} label="Стоимость" rules={[{ required: true, message: 'Введите стоимость товара!' }]}>
          <Input className={style.input} placeholder="Введите стоимость" />
        </Form.Item>
      </div>

      <Form.Item name={['description']} label="Описание" rules={[{ required: true, message: 'Введите описание!' }]}>
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

      {/* TODO: ymap api? */}
      <Form.Item name={['address']} label="Местоположение" rules={[{ required: true, message: 'Введите адрес!' }]}>
        <Input className={style.input} placeholder="Введите адрес" />
      </Form.Item>

      <div className={style.map}>
        <ProductMap coordinates={[[56.307129174823224, 44.00063863810793]]} />
      </div>

      {/* <Form.Item label="Публикация">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}> Показать </Radio>
            <Radio value={2}> Скрыть </Radio>
          </Radio.Group>
          <button type="button">Сбросить выбор</button>
        </Form.Item> */}
    </Form>
  );
};

export default EditAdFrom;
