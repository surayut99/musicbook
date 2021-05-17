const PostReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_POST":
      return [action.payload, ...state];

    case "FETCH_POST":
      return action.payload;

    case "LIKE_POST":
      return state.map((item) => {
        if (item._id !== action.payload) return item;
        return {
          ...item,
          like_count: item.like_count + 1,
        };
      });

    case "EDIT_POST":
      return state.map((item) => {
        if (item._id !== action.payload._id) return item;
        return action.payload;
      });

    case "DELETE_POST":
      return state.filter((item) => item._id !== action.payload);

    default:
      return state;
  }
};

export default PostReducer;
