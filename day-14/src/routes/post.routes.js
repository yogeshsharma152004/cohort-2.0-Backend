const express = require("express")
const postController = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")

const upload = multer({storage:multer.memoryStorage()})

/**
 * /api/posts [protected route]
 * {caption , img-file} = req.body
 */

postRouter.post("/" ,upload.single("image"), postController.createPostController )

module.exports = postRouter