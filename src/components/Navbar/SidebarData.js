import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SidebarData = [
  {
    id: 1,
    title: 'Courses',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'Add course',
    path: '/add-course',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Delete course',
    path: '/delete-course',
    icon: <AiIcons.AiTwotoneShopping />,
    cName: 'nav-text',
  },
];

export default SidebarData;
