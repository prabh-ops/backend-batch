export const renderHome = (req, res) => {
  res.render("index", {
    title: "Welcome!",
    message: "This view is rendered using Handlebars with no layout.",
  });
};

export const resetPasswordPageController = (req, res) => {
  res.render("reset");
};
export const forgotPasswordPageController = (req, res) => {
  res.render("forgot");
};
export const signUpPageController = (req, res) => {
  res.render("sign-up");
};
export const signInPageController = (req, res) => {
  res.render("sign-in");
};
export const dasboardController = (req, res) => {
  res.render("dasboard");
};
