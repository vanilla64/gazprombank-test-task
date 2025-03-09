import React, { FC } from 'react';
import s from './AddTaskForm.module.scss';
import { App, Form, Modal } from 'antd';
import { useAppDispatch } from '../../hooks/useStore';
import { addTask } from '../../store/slices/taskSlice';
import { FormTitleItem } from '../FormTitleItem/FormTitleItem';
import { FormRangeTimeItem } from '../FormRangeTimeItem/FormRangeTimeItem';
import { FormRemindItem } from '../FormRemindItem/FormRemindItem';
import { FormButtonSubmit } from '../FormButtonSubmit/FormButtomSubmit';

interface Props {
  taskDate: string
}

export const AddTaskForm: FC<Props> = ({ taskDate }) => {
  const [form] = Form.useForm()
  const { notification } = App.useApp()
  const dispatch = useAppDispatch()
  const handleSubmit = () => {
    form.validateFields()
      .then(() => {
        const {
          title,
          rangeTime,
          remindTime,
        } = form.getFieldsValue()

        dispatch(addTask({
          id: Date.now().toString(),
          title,
          taskDate: taskDate,
          startTime: rangeTime[0].format(),
          endTime: rangeTime[1].format(),
          remindTime: remindTime.format(),
        }))

        form.resetFields()
      })
      .then(() => {
        notification.success({
          message: 'Мероприятие добавлено',
          placement: 'topRight',
          showProgress: true,
          pauseOnHover: true,
          closable: true,
          duration: 2,
        })
        Modal.destroyAll()
      })
      .catch(err => console.error('Error', err))
  }

  return (
    <Form
      form={form}
      className={s.form}
      name="addTask"
    >
      <FormTitleItem />
      <FormRangeTimeItem />
      <FormRemindItem />
      <FormButtonSubmit text="Добавить" onClick={handleSubmit} />
    </Form>
  )
}
