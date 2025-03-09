import React, { FC, ReactNode, useEffect } from 'react';
import { App as AppAntd } from 'antd';
import { useAppSelector } from '../../hooks/useStore';
import dayjs from 'dayjs';

interface Props {
  children: ReactNode
}

export const App: FC<Props> = ({ children }) => {
  const tasks = useAppSelector(state => state.tasks)
  const { notification } = AppAntd.useApp()

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = dayjs();

      tasks.forEach((task) => {
        const { title, startTime, endTime, remindTime } = task

        const formattedRemindTime = Number(dayjs(remindTime).format('m'))

        const startTaskTime = dayjs(startTime);
        const timeBefore = startTaskTime.subtract(formattedRemindTime, 'minutes').format('YYYY-MM-DD HH:mm')

        if (currentTime.isSame(timeBefore, 'minute')) {
          notification.warning({
            message: `Осталось ${formattedRemindTime} минут до события!`,
            description: `${title} ${dayjs(startTime).format('HH:mm')} до ${dayjs(endTime).format('HH.mm')}`,
            placement: 'topRight',
            showProgress: true,
            pauseOnHover: true,
            closable: true,
            duration: 5,
          })
        }
      })
    }, 40000)

    return () => {
      clearInterval(intervalId)
    }
  }, [tasks])

  return (
    <>
      {children}
    </>
  )
}
