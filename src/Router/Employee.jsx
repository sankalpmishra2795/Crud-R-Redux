import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEmp } from '../redux/Action';
import { deleteEmp } from '../redux/Action';
import {Redirect} from 'react-router-dom'

export class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      location: '',
      department: '',
    };
  }
  handler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addEmp = (event) => {
    event.preventDefault();
    let obj = {
      id: Date.now(),
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      department: this.state.department,
    };
    this.props.addEmp(obj);
    this.setState({
      name: '',
      email: '',
      location: '',
      department: '',
    });
  };
  editEmp = (event) => {
    let edtId = event.target.value;
    if (event.target.className === 'fas fa-user-edit') {
      edtId = event.target.parentElement.value;
    }

    let { empArr } = this.props;
    empArr.map((ele) => {
      if (edtId == ele.id) {
        this.setState({
          name: ele.name,
          email: ele.email,
          location: ele.location,
          department: ele.department,
        });
        this.props.deleteEmp(ele.id);
      }
      console.log(
        edtId,
        '----->',
        event.target.parentElement.parentElement,
        ele.id
      );
    });
  };
  delEmp = (event) => {
    let delId = event.target.value;
    this.props.deleteEmp(delId);
    console.log(delId, '<----->', event.target.value);
  };
  render() {
    let empArr = this.props.empArr;
    let showArr = [];
    empArr.map((ele) => {
      showArr.push(ele);
      return ele;
    });
    // console.log(showArr);
    return (
      <div>
        {this.props.isAuth ? (
          <div
          className="d-flex justify-content-around org"
          style={{ height: '100vh' }}
        >
          <div className="col-md-3 b-sky mybod">
            <form onSubmit={this.addEmp}>
              <div className="form-group col-md-10">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handler}
                />
              </div>
              <div className="form-group col-md-10">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                  value={this.state.email}
                  onChange={this.handler}
                />
              </div>
              <div className="form-group  col-md-10">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  id="inputAddress"
                  value={this.state.location}
                  onChange={this.handler}
                />
              </div>

              <div className="form-group col-md-10">
                <label>Department</label>
                <select
                  id="inputState"
                  name="department"
                  className="form-control"
                  value={this.state.department}
                  onChange={this.handler}
                >
                  <option defaultValue className="text-org">
                    Select
                  </option>
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>Fullstack</option>
                </select>
              </div>

              <button type="submit" className="btn b-org col-md-10">
                Add
              </button>
            </form>
          </div>
          <div className="col-md-9 b-sky">
            <table className="table org">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">Department</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {showArr.map((ele, i) => {
                  return (
                    <tr key={ele.id}>
                      <th scope="row">{i + 1}</th>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.location}</td>
                      <td>{ele.department}</td>
                      <td>
                        <button
                          className="b-org"
                          onClick={this.editEmp}
                          value={ele.id}
                        >
                          <i class="fas fa-user-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          className="b-org"
                          onClick={this.delEmp}
                          value={ele.id}
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        ) : (
          <Redirect to='/login' />          
        )}
       </div>
    );
  }
}
const mapStateToProps = (state) => ({
  empArr: state.arr,
  isAuth:state.isAuth
});

const mapDispatchToProps = (dispatch) => ({
  addEmp: (payload) => dispatch(addEmp(payload)),
  deleteEmp: (payload) => dispatch(deleteEmp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
