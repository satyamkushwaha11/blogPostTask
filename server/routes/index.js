const express = require("express");
const router = express.Router();
const blogsRouter = require("./blogs.routes");

router.use("/blogs", blogsRouter);

module.exports = router;
