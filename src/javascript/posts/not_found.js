const notFound = (req, res, next) => {
  const error = new Error('ikke funnet')
  error.status = 404
  next(error)
}

export default notFound