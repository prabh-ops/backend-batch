export  const NewUserValidating=(req,res,next)=>{
    const { name,email,password}=req.body
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"})
    }
    if(!email.includes("@gmail.com")){
        return res.status(400).json({message:"Email is not valid"})
    }
    if(password.length<6){
        return res.status(400).json({message:"Password should be at least 6 characters"})
    }
    next()
}