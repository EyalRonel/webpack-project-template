import { FETCH_REPOS, FETCH_REPOS_BEGIN, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR} from '../actions/github-actions';

const defaultState = {
  isFetching: false,
  items: [],
  error: null
};

export default function githubReducer(state = defaultState, { type, payload }){
  switch (type){
    case FETCH_REPOS_BEGIN:
      const newState = { ...state };
      newState.isFetching = true;
      return newState;
    case FETCH_REPOS_SUCCESS:
      return { items: payload.repos, isFetching: false, error: null};
    case FETCH_REPOS_ERROR:
      return { items: [], isFetching: false, error: payload.error};
    default:
      return state;
  }
}