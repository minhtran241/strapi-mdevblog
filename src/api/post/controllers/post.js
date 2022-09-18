"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async find(ctx) {
    // if the request is authenticated or explicitly asking for public content only
    const isRequestNonPremium = ctx.query.filters?.premium === false;
    if (ctx.state.user || isRequestNonPremium) return await super.find(ctx);

    // if the request is public...
    const publicPosts = await strapi
      .service("api::post.post")
      .findPublic(ctx.query);

    const sanitizedPosts = await this.sanitizeOutput(publicPosts, ctx);
    return this.transformResponse(sanitizedPosts);
  },

  async findOne(ctx) {
    if (ctx.state.user) return await super.findOne(ctx);

    const { id } = ctx.params;
    const { query } = ctx;

    const publicPost = await strapi
      .service("api::post.post")
      .findOnePublic({ id, query });

    const sanitizedPost = await this.sanitizeOutput(publicPost, ctx);
    return this.transformResponse(sanitizedPost);
  },

  async likePost(ctx) {
    // ctx.state.user === true right now
    const user = ctx.state.user; // user trying to like the post
    const postId = ctx.params.id; // the post that's being liked

    const { query } = ctx;

    const updatedPost = await strapi.service("api::post.post").likePost({
      postId,
      userId: user.id,
      query,
    });

    const sanitizedPost = await this.sanitizeOutput(updatedPost, ctx);
    return this.transformResponse(sanitizedPost);
  },
}));
