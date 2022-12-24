// import { ChatBubble, Delete, Margin } from "@mui/icons-material";
// import { Avatar, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import "./post.css";
// import {
//     MoreVert,
//     Favorite,
//     FavoriteBorder,
//     ChatBubbleOutline,
//     DeleteOutline,
//   } from "@mui/icons-material";

// const Post = ({
//   postId,
//   postImage,
//   postCaption,
//   postLikes = [],
//   postComments = [],
//   postDate,
//   ownerImage,
//   ownerName,
//   ownerId,
//   isdelete = false,
//   isAccount = false,
// })=> {
//     // const [like, setLike] = React.useState();
//     const [isLiked, setIsLiked] = React.useState(false);
//   return (
//     <div className="post">
//       <div className="postHeader">

//         {isAccount ? <button> <MoreVert/> </button> : null}
        
//       </div>
//       <img src={postImage} alt="post" />

//       <div className="postDetails">
//         {/* <Avatar src='{ownerImage}'/> */}
//         <Avatar
//           src={ownerImage}
//           alt={ownerName}
//           sx={{
//             width: 40,
//             height: 40,
//           }}
//         />

//         <Link to={`/user/${ownerId}`}>
//           <Typography fontWeight={700}>{ownerName}</Typography>
//         </Link>

//         <Typography
//           fontWeight={100}
//           color="(rgba(0,0,0,0.5))"
//           style={{ alignSelf: "center" }}
//         >
//           {postCaption}
//         </Typography>
//       </div>
//       <button style={{ border: "none", backgroundColor: "white", margin: "2px 5px"}}>
//         <Typography fontWeight={100}> 5 Likes</Typography>
//       </button>
//       {/* <button style={{ border: "none", backgroundColor: "white" }}>
//         <Typography fontWeight={100}> 5 Comments</Typography>
//       </button> */}

//       <div className="postFooter">

//       <button onClick={()=>{
//             setIsLiked(!isLiked);
//       }} >
//         {
//             isLiked ? <Favorite style={{color:'red'}} /> : <FavoriteBorder />
//         }
//         {/* <Favorite /> */}
//       </button>

//       <button>
//         <ChatBubble />
//       </button>
//       <button>
//         {
//             isdelete ? <Delete /> : null
//         }
//         {/* < Delete/> */}
//       </button>

//       </div>
//     </div>
//   );
// };

// export default Post;
