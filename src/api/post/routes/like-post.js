module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "PUT",
      path: "/posts/:id/like",
      handler: "api::post.post.likePost",
    },
  ],
};
