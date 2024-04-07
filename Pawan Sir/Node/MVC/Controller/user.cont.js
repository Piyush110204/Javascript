import User from "../Model/user.model.js";
export const signUp = (request,response,next)=>{
    let {username,email,password,contact} = request.body;
    let user = new User(null,username,email,password,contact);
    user.signUp().then(result=>{
      return response.status(200).json({message: "Sign up success...."});
    }).catch(err=>{
     return response.status(500).json({error: "Insernal Server Error.."});
    });
 }
 export const signin = (request,response)=>{
     let {email,password}=request.body;
     User.signin(email,password).then(result=>{
      return response.status(200).json({massege:result});
     }).catch(err=>{
      return response.json(500).json({massege:"Internal Server Error"});
     });
}
export const getallUser = (request,response)=>{
  new User().getAllUser().then(result=>{
    return response.status(200).json({massege:result});
   }).catch(err=>{
      return response.status(500).json({massege:"Internal server error"});
   });
}
export const getOneUser = (request,response)=>{
    let id=request.params.id;
    new User().getOneUser(id).then(result=>{
      return response.status(200).json({massege:result});
    }).catch(err=>{
      console.log(err);
      return response.status(500).json({massege:"Internal Server Error"});
    });
}
export const deleteUser = (request,response)=>{
    let id= request.params.id;
    User.deleteUser(id).then(result=>{
          return response.status(200).json({massege:"Delete Succese"});
    }).catch(err=>{
      return response.status(500).json({massege:"Internal Server Error"});
    })
}