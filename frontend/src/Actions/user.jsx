import axios from "axios";
// import { useDispatch } from "react-redux";

export const loginUser = ({email, password}) => async (dispatch) => {
    dispatch({
      type: "LoginRequest",
    });

    const { value } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: value.user,
    });
    dispatch({
      type: "LoginFailure",
    });
};

// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoginRequest",
//     });

//     // http://localhost:5000/api/v1/login
//     // http://localhost:5000/api/v1/me
//     const { data } = await axios.post(
//       "http://localhost:7000/api/v1/login",
//       { email, password },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     dispatch({
//       type: "LoginSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoginFailure",
//       payload: error.response.data.message,
//     });
//   }
// };

// load user from axios request
// export const LoadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });

//     const { data } = await axios.get("http://localhost:7000/api/v1/me");

//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: "LoadUserFailure",
//       payload: error.response.data.message,
//     });
//   }
// };

//

// export const getFollowingPost = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "postofthefollowingRequest",
//     });

//     const { data } = await axios.get("/api/v1/posts");

//     dispatch({
//       type: "postofthefollowingSuccess",
//       payload: data.posts,
//     });
//   } catch (error) {
//     dispatch({
//       type: "postofthefollowingFailure",
//       payload: error.response.data.message,
//     });
//   }
// };
