const CommentReducer = (state = [], action) => {
  switch (action.type) {
    case "CREAT_COMMENT":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default CommentReducer;
