import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Courses',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reservations',
        path: '/',
        icon: <IoIcons.IoIoPaper />,
        cName: 'nav-text'
    },
    {
        title: '',
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
]