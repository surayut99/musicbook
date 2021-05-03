const PostReducer = (state = [], action) => {
  switch (action.type) {
    case "addPost":
      return [action.payload, ...state];

    case "refreshPost":
      return action.payload;

    case "likePost":
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          like_counts: item.like_counts + 1,
        };
      });

    case "editPost":
      return state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return action.payload;
      });

    case "deletePost":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default PostReducer;
