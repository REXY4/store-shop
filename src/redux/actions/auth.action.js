import { AuthApi } from "../../config/api";
import User from "../../fake/user.json";
import Token from "../../fake/jwt.json";

const login = (form, setShow) => async (dispatch) =>{
    const data = {
        user : User.users,
        token : Token.token
    };
    try{    
        if(form.email=== data.user.email && form.password === data.user.password){
            setShow({
                status : false,
                name : ""
            })
            return dispatch({
                type : "AUTH_SUCCESS",
                payload : data
            });
        }else{
            return false
        }
    }catch(err){
        console.log(err);
    }
}

const logOut = () => async (dispatch) =>{
    console.log("ini logout")
    try{    
        dispatch({
            type : "LOGOUT",
        })
    }catch(err){
        console.log(err);
    }
}

export {
    login,
    logOut
}