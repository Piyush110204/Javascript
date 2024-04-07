import User from "../model/user.model.js";
export const signUp=async (req,res,next)=>{
    try {
        let {username,email,password,contact} = req.body;
        let user=await User.findOne({email});
        if(user)
            return res.status(200).json({message:"Email already exist",user});
        user = await User.create({username,email,password,contact})
        return res.status(200).json({message:"Sign Up Success"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export const signIn=async (request,response,next)=>{
    try {
        let user=await User.findOne({where:{email:request.body.email}});
        if(!user){
            return response.status(401).json({message:"User Not Exist"});
        }
        return !user.password==request.body.password?response.status(401).json({message:"Password Not Match"}):response.status(200).json({user});

    } catch (error) {
        console.log(error)
        return response.status(500).json({message:"Internal server error"});
    }
}