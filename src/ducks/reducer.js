const initialState = {
  userID: null,
  first_name: '',
  last_name: '',
  email: ''
};

const UPDATE_USER = "UPDATE_USER";

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      const { userID } = payload;
      return { ...state, userID };

      default:
      return state;
  }
}
