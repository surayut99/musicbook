export const createAct = (post) => {
  return {
    type: "CREATE_POST",
    payload: post,
  };
};

export const fetchAct = (posts) => {
  return {
    type: "FETCH_POST",
    payload: posts,
  };
};

export const likeAct = (postId) => {
  return {
    type: "LIKE_POST",
    payload: postId,
  };
};

export const editAct = (editedPost) => {
  return {
    type: "EDIT_POST",
    payload: editedPost,
  };
};

export const deleteAct = (postId) => {
  return {
    type: "DELETE_POST",
    payload: postId,
  };
};
