export const renderHome = (req, res) => {
    res.render("index", {
      title: "Welcome!",
      message: "This view is rendered using Handlebars with no layout."
    });
  };
  
 export  const  resetPasswordPageController=(req,res)=>{
    res.render("reset")

 }
 export  const  forgotPasswordPageController=(req,res)=>{
    res.render("forgot")

 }