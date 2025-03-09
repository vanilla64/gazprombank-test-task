import React, { FC, useMemo } from 'react';
import { useAppSelector } from '../../hooks/useStore';
import { TaskListItem } from '../TaskListItem/TaskListItem';
import { TaskList } from '../TaskList/TaskList';
import { ITask } from '../../models/common/ITask';

const sortArr = (arr: ITask[]) => arr
  .map(x => ({ ...x, milliseconds: Number(x.id) }))
  .sort((a, b) => b.milliseconds - a.milliseconds)

export const TaskPage: FC = () => {
  const tasks = useAppSelector((state) => state.tasks)

  const sortedArr = useMemo(() =>
    tasks
      .map(x => ({ ...x, milliseconds: new Date(x.startTime).getTime() }))
      .sort((a, b) => b.milliseconds - a.milliseconds)
    , [tasks])

  return (
    <>
      <h1>Список мероприятий</h1>
      <TaskList>
        {sortedArr.length > 0 &&
          sortedArr.map(task => <TaskListItem key={task.id} data={task} />)
        }
      </TaskList>
    </>
  )
}
