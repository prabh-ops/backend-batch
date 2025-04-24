import { verifyToken } from "../utils/auth.utils.js";

export default (req, res, next) => {
  try {
    const authHeader = req.headers.auth;

    if (!authHeader) {
      res.status(403).send({
        message: "Token is missing in the authorization header",
      });
    }
    const data = verifyToken(authHeader);
    req.auth = data;

    next();
  } catch (error) {
    res.status(403).send({
      error: error.message,
    });
  }
};

