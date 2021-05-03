export const addPost = (post) => {
  return {
    type: "addPost",
    payload: post,
  };
};

export const refreshPost = (posts) => {
  return {
    type: "refreshPost",
    payload: posts,
  };
};

export const likePost = (postId) => {
  return {
    type: "likePost",
    payload: postId,
  };
};

export const editPost = (editedPost) => {
  return {
    type: "editPost",
    payload: editedPost,
  };
};

export const deletePost = (postId) => {
  return {
    type: "deletePost",
    payload: postId,
  };
};
