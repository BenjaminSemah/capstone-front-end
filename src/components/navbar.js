import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
  return (
    <nav className='bg-blue-50 text-blue-500'>
      <div className='w-11/12 max-w-6xl mx-auto grid sm:grid-cols-3 md:grid-cols-4'>
        <div className='sm:col-span-2 md:col-span-3'>
          <NavLink
            className='p-4 block sm:inline-block'
            activeClassName='text-blue-900'
            exact
            to='/'
          >
            NormalRoute
          </NavLink>
          <NavLink
            className='p-4 block sm:inline-block'
            activeClassName='text-blue-900'
            exact
            to='/protected_route'
          >
            ProtectedRoute
          </NavLink>
        </div>
        <div className='sm:text-right'>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/signup'
          >
            Sign Up
          </NavLink>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/login'
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

export default connect(mapStateToProps)(Navbar);