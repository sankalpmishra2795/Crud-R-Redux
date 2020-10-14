import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Login from '../Router/Login';
import Home from '../Router/Home';
import Employee from '../Router/Employee';
import {connect} from 'react-redux'
import {logout} from '../redux/Action'
class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar b-sky org">
          <div className="h1">
            <i className="fas fa-cube "></i>
            <span className="mt-3"> Empolyee Data</span>
          </div>
          <ul
            className="d-flex mt-3 "
            style={{ listStyle: 'none', color: '#ff8c00' }}
          >
            <li className="mx-4">
              <Link className="org" to="/">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link className="org" to="/employee">
                Empolyee Details
              </Link>
            </li>
            <li className="mx-4">
              {this.props.isAuth?( <Link className="org" to="/login" onClick={this.props.logout}>
                Logout
              </Link>):( <Link className="org" to="/login">
                Login
              </Link>)}
             
             
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/employee" component={Employee}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth : state.isAuth
})

const mapDispatchToProps = (dispatch) =>({
logout :() => dispatch(logout()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)