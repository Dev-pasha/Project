// // import { Typography } from '@mui/material'
// import React, { useEffect } from "react";
// import "./home.css";
// import User from "../User/User";
// import Post from "../Post/Post";
// import { useDispatch, useSelector } from "react-redux";
// import { postOfFollowingReducer } from "../../Reducers/userReducer";
// import { getFollowingPost } from "../../Actions/user";
// import Loader from "../Loader/loader";
// import { Typography } from "@mui/material";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { loading, post, error } = useSelector(
//     (state) => state.getFollowingPost
//   );
//   useEffect(() => {
//     dispatch(postOfFollowingReducer());
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <div className="home">
//       <div className="homeleft">

//         {
//           post && post.length>0 ? (post.map((post)=>(
//             <Post
//             key={post._id}
//               postImage={post.postImage}
//               ownerName={post.ownerName}
//               postCaption={post.postCaption}
//               postDate={post.postDate}
//               postLikes={post.postLikes}
//               postComments={post.postComments}
//               isAccount={true}
//               ownerImage={post.ownerImage}
//               ownerId={post.ownerId}
//             />
//           ))): <Typography> No Post Found</Typography>
//         }


//         {/* <Post
//           postImage={
//             "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
//           }
//           ownerName={"abdullah khalid"}
//           postCaption={"this is a caption"}
//           postDate={"2021-10-10"}
//           postLikes={4}
//           postComments={4}
//           isAccount={true}
//           ownerImage={
//             "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
//           }
//           ownerId={"user._id"}
//         /> */}
//       </div>
//       <div className="homeright">
//         {/* <div className="user">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="userImage" />
//               <Typography> abdullah khalid</Typography>
//           </div> */}
//         <User
//           userId={"user._id"}
//           name={"user.name"}
//           avatar={
//             "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
