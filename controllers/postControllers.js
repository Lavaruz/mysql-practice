const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.findAll();
  res.send(posts);
};

exports.createNewPost = async (req, res, next) => {
  const { title, body } = req.body;
  const post = new Post(title, body);
  await post.save();
  res.send("create new post");
};

exports.getPostById = (req, res, next) => {
  res.send("get post by ID");
};
