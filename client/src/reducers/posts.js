const INITIAL_STATE = [];

const reducer = (posts = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log("posts", posts);
      return [...posts, action.payload];

    default:
      return posts;
  }
};
export default reducer;
