import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const API_REQUEST_REQUEST = 'users:apiRequest';
export const API_REQUEST_SUCCESS = 'users:apiRequestSuccess';
export const API_REQUEST_ERROR = 'users:apiRequestSuccess';

export function updateUser(newUser){
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}


export function apiRequestSuccess(){
  return {
      type: API_REQUEST_SUCCESS,
      payload: {
        user: "Success"
      }
    }
}

export function apiRequestError(){
  return {
    type: API_REQUEST_ERROR,
    payload: {
      user: "Error!"
    }
  }
}

export function apiRequest(){
  return dispatch => {
    $.ajax({
      url:'http://www.google.com',
      success(response){ dispatch(apiRequestSuccess()) },
      error(err){ dispatch(apiRequestError()) }
    })
  }
}