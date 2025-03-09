import React, { FC } from 'react';
import s from './HeaderNavigation.module.scss'
import { ROUTES } from '../../router/Routing';
import { NavLink } from 'react-router';

export const HeaderNavigation: FC = () => {
  return (
    <nav className={s.navList}>
      {Object.entries(ROUTES).map(([key, item]) => (
        <NavLink
          key={key}
          to={item.path}
          className={({ isActive }) =>
            isActive ? s.linkActive : ''
          }
        >
          {item.pageName}
        </NavLink>
      ))}
    </nav>
  );
}
