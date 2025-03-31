export const createUserValidator = async (req, res, next) => {
  const { name, email, password, bio } = req.body;

  if (!name || !email || !password || !bio) {
    return res.status(400).json({
      message: "please provide all the fields",
    });
  }
  if (!email.includes("@")) {
    return res.status(400).json({
      message: "please provide a valid email",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "password must be at least 6 characters long",
    });
  }
  if (!bio || bio.length < 10) {
    return res.status(400).json({
      message: "bio must be at least 10 characters long",
    });
  }
  if (!name || name.length < 3) {
    return res.status(400).json({
      message: "name must be at least 3 characters long",
    });
  }
  next();
};

