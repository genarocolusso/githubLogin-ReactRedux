// store/ducks/auth.js


export const Creators = {
  login: (user,token) => ({
    type: Types.LOGIN,
    payload: {
      user: user,
      token: token
    },
  }),

  logout: ( ) => ({
    type: Types.LOGOUT,
  })

}
 

// Action Types

export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
};

// Reducer
console.log(Types, Creators)
const initialState = {
  isLogged: false,
  token: null,
  user: null,
};

export default function users(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case Types.LOGIN:
      return {...state, isLogged: true, token: action.payload.token,  user : action.payload.user};
    case Types.LOGOUT:
      return {...state,   isLogged: false, token: null,user: null};
    default:
      return state;
  }
}

// Action Creators

 

 
