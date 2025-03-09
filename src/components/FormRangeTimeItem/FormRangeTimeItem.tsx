import React, { FC } from 'react';
import { Form, TimePicker } from 'antd';
import s from './FormRangeTimeItem.module.scss';

interface Props {
  needConfirm?: boolean
}

export const FormRangeTimeItem: FC<Props> = ({ needConfirm = false }) => {
  return (
    <Form.Item
      name="rangeTime"
      rules={[{required: true, message: 'Обязательное поле'}]}
    >
      <TimePicker.RangePicker
        className={s.formItem}
        placeholder={['Начало', 'Конец']}
        format="HH:mm"
        // minuteStep={15}
        needConfirm={needConfirm}
        changeOnScroll
      />
    </Form.Item>
  )
}
