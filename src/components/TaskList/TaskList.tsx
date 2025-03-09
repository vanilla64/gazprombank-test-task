import React, { FC, ReactNode } from 'react';
import s from './TaskList.module.scss';

interface Props {
  children: ReactNode
}

export const TaskList: FC<Props> = ({ children }) => {
  return <ul className={s.taskList}>{children}</ul>
}
