const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
  const token = req.headers.authorization
  next()
  // if (token) {
  //   const onlyToken = token.slice(7, token.length)
  //   jwt.verify(onlyToken, 'BWuSoPsRv_VTvOLT1-JQo2X7cXscucOlMppjp9hMlOc6bA3a1dN4oSiuQgTOveSJPLP8hg', (err, decode) => {
  //     if (err) {
  //       return res.status(401).send({ message: 'Invalid Token' })
  //     }
  //     req.user = decode
  //     next()
  //     return
  //   })
  // } else {
  //   return res.status(401).send({ message: 'Token is not supplied.' })
  // }
}

module.exports = { isAuth }
