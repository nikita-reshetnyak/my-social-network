import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import { loadAuthUser,logout } from '../../redux/auth-Reducer';


class HeaderContainer extends React.Component {
   
   render() {
      return <Header {...this.props} />
   }

}
const mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, { loadAuthUser,logout })(HeaderContainer);
