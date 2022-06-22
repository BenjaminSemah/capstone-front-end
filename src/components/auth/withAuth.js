import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/auth';
import LoadingSpinner from '../LoadingSpinner';
import Login from './login';

function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.dispatchCheckAuth();
    }

    render() {
      if (!this.props.authChecked) {
        return <LoadingSpinner />;
      } if (!this.props.loggedIn) {
        return (
          <>
            <Login />
            <p>You need to login to view this page.</p>
          </>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({
    auth: { authChecked, loggedIn, currentUser },
  }) => ({ authChecked, loggedIn, currentUser });

  const mapDispatchToProps = (dispatch) => ({
    dispatchCheckAuth: () => dispatch(checkAuth()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;
