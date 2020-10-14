import { ADD_EMPLOYEE, DELETE_EMPLOYEE, IS_LOGIN,IS_LOGOUT } from './Action';
import swal from 'sweetalert';

const incitialState = {
  arr: [],
  obj: {
    email: 'san123@gmail.com',
    password: '12345',
  },
  isAuth: false,
};

const reducer = (state = incitialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case DELETE_EMPLOYEE:
      let arr2 = state.arr.filter((ele) => {
        console.log(ele.id, action.payload);
        return ele.id != action.payload;
      });
      return {
        ...state,
        arr: arr2,
      };
    case IS_LOGIN:
      let isAuth = state.isAuth
      let obj = state.obj;
      console.log(action.payload,obj.email,'<<-----',isAuth);
      if (
        obj.email == action.payload.email &&
        obj.password == action.payload.password
      ) {
        isAuth = true
        swal("Good job!", "Successfuly Login!", "success");
        console.log(action.payload,obj.email,"----->>>",isAuth);

      
      }else{
        swal("Opps!", "Something Went Wrong Check Email Or Password!", "error");
      }
      return {
        ...state,
        isAuth:isAuth
      }
      case IS_LOGOUT:
        swal("Logout!", "Successfuly Logout!", "success");

      return {
        ...state,
        isAuth:false
      }
    default:
      return state;
  }
};
export default reducer;
