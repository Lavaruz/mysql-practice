const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  const { title, body } = req.body;
  const post = new Post(title, body);
  await post.save();
  res.status(201).send("create new post");
};

exports.getPostById = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findById(req.params.id);
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
