const express = require("express");

const postController  = require("../controller/posts");

const router = express.Router();

router.get("/",postController.getPosts);

module.exports = router;