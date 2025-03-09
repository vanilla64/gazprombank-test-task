import React, { FC } from 'react';
import { Badge } from 'antd';

interface Props {
  text: string
}

export const CalendarTaskItem: FC<Props> = ({ text }) => {
  return (
    <li>
      <Badge status={'success'} text={text} />
    </li>
  )
}
