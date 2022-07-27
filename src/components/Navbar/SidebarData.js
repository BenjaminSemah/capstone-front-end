import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SidebarData = [
  {
    id: 1,
    title: 'Courses',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
    access: ['admin', 'user'],
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/reservations',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    access: ['admin', 'user'],
  },
  {
    id: 3,
    title: 'Add course',
    path: '/add-course',
    icon: <AiIcons.AiFillFolderAdd />,
    cName: 'nav-text',
    access: ['admin'],
  },
  {
    id: 4,
    title: 'Add reservation',
    path: '/add-reservations',
    icon: <AiIcons.AiFillFolderAdd />,
    cName: 'nav-text',
    access: ['admin', 'user'],
  },
  {
    id: 5,
    title: 'Delete course',
    path: '/delete-course',
    icon: <AiIcons.AiFillDelete />,
    cName: 'nav-text',
    access: ['admin'],
  },
];

export default SidebarData;
