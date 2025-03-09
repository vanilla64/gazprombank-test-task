import React, { FC } from 'react'
import s from './CalendarPage.module.scss'
import { App, Calendar } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useAppSelector } from '../../hooks/useStore'
import { CalendarTaskItem } from '../CalendarTaskItem/CalendarTaskItem';
import { AddTaskForm } from '../AddTaskForm/AddTaskForm';
import { selectTasks } from '../../store/slices/taskSlice';

const formatDate = (date: Dayjs | string) => dayjs(date).format('DD-MM-YYYY')
export const CalendarPage: FC = () => {
  const { modal } = App.useApp()
  const tasks = useAppSelector(selectTasks)

  const showModal = (value: Dayjs) => modal.info({
    title: `Добавить мероприятие на ${formatDate(value)}`,
    width: 500,
    icon: null,
    maskClosable: true,
    closable: true,
    footer: null,
    content: <AddTaskForm taskDate={formatDate(value)} />,
  })

  const dateCellRender = (value: Dayjs) => {
    const taskItems = tasks.filter(task => task.taskDate  === formatDate(value))

    return taskItems.length > 0 && (
        <ul className={s.taskList}>
          {
            taskItems.map(({ id, title }) => (
              <CalendarTaskItem key={id} text={title} />
            ))
          }
        </ul>
    )
  }

  const onSelect = (newValue: Dayjs) => {
    showModal(newValue)
  }

  return <Calendar cellRender={dateCellRender} onSelect={onSelect} />
}
