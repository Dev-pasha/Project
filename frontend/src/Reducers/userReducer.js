import {createReducer} from "@reduxjs/toolkit";

const initialState = {
// isAuthenticated: false,
};
export const userReducer = createReducer(initialState, {
  // Add reducers here
  LoginRequest: (state) => {
    state.loading =true;

  },
  LoginSuccess: (state, action) => {
    state.loading=false;
    // state.loginUser= action.payload;
    state.user= action.payload;
    // state.isAuthenticated=true;
  },
  LoginFailure: (state, action) => {
    state.loading=false;
    state.error=action.payload;
    // state.isAuthenticated=false;

  },

  
});



// export const RegisterReducer = createReducer(initialState, {

//   RegisterRequest: (state) => {
//     state.loading=true;
//   },
//   RegisterSuccess: (state, action) => {
//     state.loading=false;
//     state.user= action.payload;
//     state.isAuthenticated=true;

//   },
//   RegisterFailure: (state, action) => {
//     state.loading=false;
//     state.error=action.payload
//     state.isAuthenticated=false;

//   },

  


// });

// export const loadUser = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading=true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.loading=false;
//     state.user= action.payload;
//     state.isAuthenticated=true;

//   },
//   LoadUserFailure: (state, action) => {
//     state.loading=false;
//     state.error=action.payload
//     state.isAuthenticated=false;
//   }
// })


// export const postOfFollowingReducer = createReducer({},{

//   postofthefollowingRequest: (state) => {
//     state.loading=true;
//   },
//   postofthefollowingSuccess: (state, action) => { 
//     state.loading=false;
//     state.posts= action.payload;
//   },
//   postofthefollowingFailure: (state, action) => {
//     state.loading=false;
//     state.error=action.payload;
//   },

//   clearErrors:(state) => {
//     state.error=null;
//   }

  

// })


