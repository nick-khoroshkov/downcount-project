import types from "../types";

const configuration = (
  state = { loading: true, data: null, error: null },
  action
) => {
  switch (action.type) {
    case types.GET_CONFIG_START:
      return { ...state, loading: true };
    case types.GET_CONFIG_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case types.GET_CONFIG_ERROR:
      return { loading: false, data: null, error: action.payload };
    case types.SET_CONFIG_DATA:
      return { loading: false, error: null, data: action.payload };

    default:
      return state;
  }
};

export default configuration;
