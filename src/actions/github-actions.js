import $ from 'jquery';
export const FETCH_REPOS = 'github:repos:fetch';
export const FETCH_REPOS_BEGIN = 'github:repos:begin';
export const FETCH_REPOS_SUCCESS = 'github:repos:success';
export const FETCH_REPOS_ERROR = 'github:repos:error';



export const fetchRepos = () => {
  return dispatch => {

    dispatch(fetchReposBegin());

    $.ajax({
      url:'//api.github.com/users/EyalRonel/repos',
      success(response){
        dispatch(fetchReposSuccess(response))
      },
      error(err){
        dispatch(fetchReposError(err.statusText))
      }
    })
  }
};

export function fetchReposBegin(){
  return {
    type: FETCH_REPOS_BEGIN
  }
}
export function fetchReposSuccess(response){
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: {
      repos: response
    }
  }
}
export function fetchReposError(errorText){
  return {
    type: FETCH_REPOS_ERROR,
    payload: {
      error: errorText
    }
  }
}
