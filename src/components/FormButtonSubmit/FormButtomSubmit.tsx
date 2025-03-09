import React, { FC } from 'react';
import { Button, Form } from 'antd';
import s from './FormButtonSubmit.module.scss';

interface Props {
  text: string
  onClick: () => void
}

export const FormButtonSubmit: FC<Props> = ({ text, onClick }) => {
  return (
    <Form.Item>
      <Button
        className={s.button}
        type="primary"
        size="large"
        htmlType="submit"
        onClick={onClick}
      >
        {text}
      </Button>
    </Form.Item>
  )
}
