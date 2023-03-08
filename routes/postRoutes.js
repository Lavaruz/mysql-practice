const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postControllers");

router
  .route("/")
  .get(postsController.getAllPosts)
  .post(postsController.createNewPost);

router.route("/:id").get(postsController.getPostById);

module.exports = router;
