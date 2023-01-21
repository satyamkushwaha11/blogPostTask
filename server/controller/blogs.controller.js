const Joi = require("joi");
const Blog = require("../models/blogs.model");

/**
 * desc : For creating a blog
 * authur:satyam kushwaha
 * date:20-01-2023
 */

const createBlog = async (req, res) => {
  const bodyData = (req || {}).body || {};
  // Schema validator
  const schema = Joi.object({
    blogContent: Joi.string().required(),
  });
  let schemaValidator = schema.validate(bodyData);
  if (schemaValidator.error) {
    return res.status(400).json({
      message: schemaValidator.error.message || "Bad Request!",
      code: 400,
    });
  } else {
    schemaValidator = schemaValidator.value;
  }
  try {
    const result = await Blog.create(schemaValidator);
    if (result) {
      return res.status(201).json({
        message: "Blog pubhlished successfully",
        postId: result?.["_id"],
        status: 201,
      });
    } else {
      return res.status(500).json({
        message: "blog not published! something error while creating",
        status: 500,
        err: result,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      status: 500,
    });
  }
};

/**
 * desc : For getting all blogs
 * authur:satyam kushwaha
 * date:20-01-2023
 */

const getAllBlogs = async (req, res) => {
  try {
    const result = await Blog.find({});
    if (result) {
      return res.status(200).json({
        message: "all blogs data",
        data: result,
        status: 200,
      });
    } else {
      return res.status(500).json({
        message: " something error while creating",
        status: 500,
        err: result,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      status: 500,
      err,
    });
  }
};

/**
 * desc : For getting a single blog by blog id
 * authur:satyam kushwaha
 * date:20-01-2023
 */

const getBlogById = async (req, res) => {
  const queryData = (req || {}).query || {};
  
  // Schema validator
  const schema = Joi.object({
    blogId: Joi.string().required(),
  });

  let schemaValidator = schema.validate(queryData);
  if (schemaValidator.error) {
    return res.status(400).json({
      message: schemaValidator.error.message || "Bad Request!",
      code: 400,
    });
  } else {
    schemaValidator = schemaValidator.value;
  }
  try {
    const result = await Blog.findOne({ _id: schemaValidator?.blogId });
    if (result) {
      return res.status(201).json({
        message: "Blog gotted successfully",
        data: result,
        status: 201,
      });
    } else {
      return res.status(500).json({
        message: " something error while creating",
        status: 500,
        err: result,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      status: 500,
    });
  }
};

/**
 * desc : For updating a single blog by blog id
 * authur:satyam kushwaha
 * date:20-01-2023
 */
// const updateBlog = (req, res) => {};

/**
 * desc : For deleting a single blog by blog id
 * authur:satyam kushwaha
 * date:20-01-2023
 */

// const deleteBlog = (req, res) => {};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  // updateBlog,
  // deleteBlog,
};
