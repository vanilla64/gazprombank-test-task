import React, { FC } from 'react';
import s from './TaskListItem.module.scss';
import { ITask } from '../../models/common/ITask';
import { App, Button, Modal, Typography } from 'antd';
import dayjs from 'dayjs';
import { useAppDispatch } from '../../hooks/useStore';
import { deleteTask } from '../../store/slices/taskSlice';
import { EditTaskForm } from '../EditTaskForm/EditTaskForm';

interface Props {
  data: ITask
}

const formatDate = (date: string) => dayjs(date).format('HH:mm a')

export const TaskListItem: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch()
  const { notification, modal } = App.useApp()

  const { id, title, taskDate, startTime, endTime } = data
  const { Text } = Typography

  const handleDelete = () => {
    dispatch(deleteTask(id))
    notification.success({
      message: 'Мероприятие удалено',
      placement: 'topRight',
      showProgress: true,
      pauseOnHover: true,
      closable: true,
      duration: 2,
    })
  }

  const openDeleteModal = () => {
    modal.warning({
      title: `Вы действительно хотите удалить мероприятие?`,
      maskClosable: true,
      closable: true,
      onCancel: Modal.destroyAll,
      onOk: handleDelete,
      cancelText: 'Нет',
      okText: 'Да',
      okCancel: true,
    })
  }

  const openEditModal = () => {
    modal.warning({
      title: 'Редактировать мероприятие',
      icon: null,
      maskClosable: true,
      closable: true,
      footer: null,
      okCancel: true,
      content: <EditTaskForm data={data} />
    })
  }

  return (
    <li className={s.listItem}>
      <div>
        <Text strong>{`${title} ${taskDate}`}</Text>
        <div className={s.dateContainer}>
          <Text type="secondary">{formatDate(startTime) + ' до ' + formatDate(endTime)}</Text>
        </div>
      </div>

      <div className={s.actionsContainer}>
        <Button type="link" block onClick={openEditModal}>Редактировать</Button>
        <Button type="link" block onClick={openDeleteModal}>Удалить</Button>
      </div>
    </li>
  )
}
