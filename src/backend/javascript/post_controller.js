// json data
import * as posts from '../json/post.json' with { type: 'json' }

// let posts = [
//   {
//     id: 1,
//     title: 'post 1'
//   },
//   {
//     id: 2,
//     title: 'post 2'
//   },
//   {
//     id: 3,
//     title: 'post 3'
//   }
// ]


// Get all posts
// "GET api/posts"
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit)

  if (limit && limit > 0) {
    return res.status(200).json(posts.slice(0, limit))
  } 
  
  res.status(200).json(posts)
}


// Get single post
// "GET /api/post/:id"
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id == id) 

  if (!post) {
    const error = new Error(`posten med id ${id} ble ikke funnet`)
    error.status = 404
    return next(error)
  } 
    
  res.status(200).json(post)
}


// Create new post
// "POST /api/post"
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    message: req.body.message
  }

  if (!newPost.title) {
    const error = new Error(`må inneholdes en tittel`)
    error.status = 400
    return next(error)
  }

  posts.push(newPost)
  res.status(201).json(posts)
}


// Update post
// "PUT /api/posts/:id"
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id == id)

  if (!post) {
    const error = new Error(`posten med id ${id} ble ikke funnet`)
    error.status = 404
    return next(error)
  }  

  post.title = req.body.title
  res.status(200).json(posts)
}


// Delete post
// "DELETE /api/posts:id"
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id == id)

  if (!post) {
    const error = new Error(`posten med id ${id} ble ikke funnet`)
    error.status = 404
    return next(error)
  }   

  posts = posts.filter(post => post.id != id)
  res.status(200).json(posts)
}