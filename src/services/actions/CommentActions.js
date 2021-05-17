export const createAct = (newComment) => {
  return {
    type: "CREAT_COMMENT",
    payload: newComment,
  };
};
