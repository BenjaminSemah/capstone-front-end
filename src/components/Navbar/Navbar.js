import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData }  from './SidebarData';

function Navbar() {
  const {sidebar, setSidebar} = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
        <div>
            <Link to="#" classname="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                } )}
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
