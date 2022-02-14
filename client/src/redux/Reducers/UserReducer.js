import { LOAD, REGISTER ,FAIL, LOGIN, CURRENT, LOGOUT, CLEARERRORS} from "../types/userTypes"


const initialState={
    user:null,
    load:false,
    auth:false,
    errors:null
}

const UserReducer=(state=initialState,action)=>{
   switch (action.type) {
       case LOAD:
           return{
           ...state,load:true
       }
       case REGISTER:
       
       localStorage.setItem('token',action.payload.token )
           return {...state,load:false,user:action.payload.user,auth:true}

           case LOGIN:
         
               localStorage.setItem('token',action.payload.token)
               return {...state, load:false, auth:true, user:action.payload.found}
           case CURRENT: 
           return {...state, auth:true,user:action.payload   }
           case FAIL:
               return {
...state,errors:action.payload.errors,load:false
           }
           case LOGOUT:
               localStorage.removeItem('token')
               return {...state, user:null, errors:null, auth:false}
   case CLEARERRORS: 
   return {...state,errors:null}
       default:
           return state
   }
}
export default UserReducer