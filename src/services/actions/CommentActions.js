export const addComment = (newComment) => {
  return {
    type: "addComment",
    payload: newComment,
  };
};
