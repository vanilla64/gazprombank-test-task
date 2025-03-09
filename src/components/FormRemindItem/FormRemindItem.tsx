import React, { FC } from 'react';
import { Form, TimePicker } from 'antd';
import s from './FormRemindItem.module.scss';

export const FormRemindItem: FC = () => {
  return (
    <Form.Item
      name="remindTime"
      rules={[{required: true, message: 'Обязательное поле'}]}
    >
      <TimePicker
        className={s.formItem}
        placeholder="Напомнить о начале за..."
        minuteStep={5}
        format="mm"
        needConfirm={false}
      />
    </Form.Item>
  )
}
