const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/user/login?error=You are unauthorized. Please log in.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      username: decoded.username,
    };
    next();
  } catch (err) {
    res.redirect('/user/login?error=Invalid token. Please log in again.');
  }
};

module.exports = authMiddleware;