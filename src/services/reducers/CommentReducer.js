const CommentReducer = (state = [], action) => {
  switch (action.type) {
    case "addComment":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default CommentReducer;
