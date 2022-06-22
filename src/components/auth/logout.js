/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../actions/auth';

const Logout = ({ dispatchLogoutUser }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatchLogoutUser().then(() => history.push('/'));
  };

  return (
    <button className="p-4" onClick={handleClick}>
      Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
