import React, { FC } from 'react';
import { App, Form, Modal } from 'antd';
import { FormTitleItem } from '../FormTitleItem/FormTitleItem';
import { ITask } from '../../models/common/ITask';
import dayjs from 'dayjs';
import { FormRangeTimeItem } from '../FormRangeTimeItem/FormRangeTimeItem';
import { FormRemindItem } from '../FormRemindItem/FormRemindItem';
import { useAppDispatch } from '../../hooks/useStore';
import { FormButtonSubmit } from '../FormButtonSubmit/FormButtomSubmit';
import { updateTask } from '../../store/slices/taskSlice';

interface Props {
  data: ITask
}

export const EditTaskForm: FC<Props> = ({ data }) => {
  const [form] = Form.useForm()
  const { notification } = App.useApp()
  const dispatch = useAppDispatch()
  const { title, startTime, endTime, remindTime } = data

  const handleEditTask = () => {
    form.validateFields()
      .then(() => {
        const {
          title,
          rangeTime,
          remindTime,
        } = form.getFieldsValue()

        const copiedTask = structuredClone(data)

        copiedTask['title'] = title
        copiedTask['startTime'] = rangeTime[0].format()
        copiedTask['endTime'] = rangeTime[1].format()
        copiedTask['remindTime'] = remindTime.format()

        dispatch(updateTask(copiedTask))
      })
      .then(() => {
        notification.success({
          message: 'Мероприятие обновлено',
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
      name="updateTask"
      initialValues={{
        title,
        rangeTime: [dayjs(startTime), dayjs(endTime)],
        remindTime: dayjs(remindTime),
      }}
    >
      <FormTitleItem />
      <FormRangeTimeItem />
      <FormRemindItem />
      <FormButtonSubmit text="Сохранить" onClick={handleEditTask} />
    </Form>
  )
}
