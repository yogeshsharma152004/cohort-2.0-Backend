const express = require("express")
const postController = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

/**
 * POST METHOD /api/posts [protected route]
 * {caption , img-file} = req.body
 */

postRouter.post("/" ,upload.single("image"), identifyUser , postController.createPostController )

/**
 * GET METHOD /api/posts [protected route]
 * fetch all the post of the user who requested
 */

postRouter.get("/" , identifyUser, postController.getPostController)

/**
 * GET METHOD /api/posts/details/:id [protected route]
 * retuen an detail about the sepcific post with id and also chcek the post belongs to the user that the request come from 
 */

postRouter.get("/details/:postId" , identifyUser, postController.getPostDetailsController)


module.exports = postRouter