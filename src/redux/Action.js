export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOGOUT = 'IS_LOGOUT'

export const addEmp = (payload) => {
  return {
    type: ADD_EMPLOYEE,
    payload,
  };
};

export const deleteEmp = (payload) => {
  return {
    type: DELETE_EMPLOYEE,
    payload,
  };
};

export const login = (payload) => {
  console.log(payload);
  return {
    type: IS_LOGIN,
    payload,
  };
};

export const logout = (payload) => ({
  type: IS_LOGOUT,
  payload,
})
