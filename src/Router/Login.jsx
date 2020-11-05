import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import { login } from '../redux/Action';
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLogin: false,
    };
  }
  handler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  login = (event) => {
    event.preventDefault();
    let obj = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(obj);
  };
  render() {
    return (
      <div>
        { this.props.isAuth ? (
          <Redirect to='/' /> 
        ) :(
          <form onSubmit={this.login} className="my-4 org">
          <div className="card col-4 mx-auto">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
                  onChange={this.handler}
                  placeholder='Enter- san123@gmail.com'
            />
            <label>Password</label>
            <input
              type="number"
              name="password"
              value={this.state.pasword}
                  onChange={this.handler}
                  placeholder='Enter- 12345'
            />
            <button type="submit" className="btn org">
              Login
            </button>
          </div>
        </form>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  empArr: state.loginArr,
  isAuth: state.isAuth
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
