import { loginTypes } from '../../types/login.types';

const initialState = {
  loading: false,
  user: {}
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}