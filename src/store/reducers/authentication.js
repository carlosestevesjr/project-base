export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,

  loginErrorData: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        data: null,
        loginErrorData: action.payload,
        loading: false,
        error: true,
      };
    
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (payload) => ({
    type: Types.LOGIN_REQUEST,
    payload,
  }),
  loginRequestSuccess: (payload) => ({
    type: Types.LOGIN_SUCCESS,
    payload,
  }),
  loginRequestFail: (payload) => ({
    type: Types.LOGIN_FAIL,
    payload,
  }),
};
