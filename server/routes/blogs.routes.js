const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require("../controller/blogs.controller");

router.post("/", createBlog);
router.get("/",getAllBlogs);
router.get("/getById",getBlogById);
// router.put("/id");
// router.delete("/id");

module.exports = router;
