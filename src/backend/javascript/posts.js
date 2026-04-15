import express from 'express'
import { getPosts, getPost, createPost, updatePost, deletePost } from './post_controller.js'

const router = express.Router()

// Get all posts
router.get('/', getPosts)

// Get single post
router.get('/:id', getPost)

// Create new post
router.post('/', createPost)

// Update post
router.put('/:id', updatePost)

// Delete post
router.delete('/:id', deletePost)


export default router