/* eslint-disable */
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BsSignpost2Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import SidebarData from './SidebarData';
import { APIuserLogOut } from '../../redux/auth';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  const authuser = localStorage.getItem('userAuth');
  const currentUser = useSelector((state) => state.currentUserr.current);
  const userRole = currentUser.admin ? 'admin' : 'user';
  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: '#97bf0f' }}>
        <span className="navbar">
          <button type="button" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </button>
        </span>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" type="button" onClick={showSidebar}>
            <li className="navbar-toggle">
              <button type="button" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </button>
            </li>
            {SidebarData.map(
              (item) =>
                item.access.includes(userRole) && (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ),
            )}
            {authuser ? (
              <li className="nav-text">
                <Link
                  to="/login"
                  onClick={() => dispatch(APIuserLogOut(authuser))}
                >
                  <BsSignpost2Fill />
                  <span>Sign Out</span>
                </Link>
              </li>
            ) : (
              <li className="nav-text">
                <Link to="/login">
                  <BsSignpost2Fill />
                  <span>Login</span>
                </Link>
              </li>
            )}

            <div className="social-menu">
              <FaIcons.FaTwitter className="social-icons" />
              <FaIcons.FaFacebook className="social-icons" />
              <FaIcons.FaGooglePlus className="social-icons" />
              <FaIcons.FaVimeo className="social-icons" />
              <FaIcons.FaPinterest className="social-icons" />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
