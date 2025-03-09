import React, { FC } from 'react';
import { Form, Input } from 'antd';

export const FormTitleItem: FC = (props) => {
  return (
    <Form.Item
      name="title"
      rules={[{ required: true, message: 'Обязательное поле' }]}
    >
      <Input placeholder="Введите текст" />
    </Form.Item>
  )
}
