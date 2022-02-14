import { CLEARERRORS, CURRENT, FAIL, LOAD, LOGIN, LOGOUT, REGISTER } from "../types/userTypes"
import axios from 'axios'


export const register=(user,history)=>async(dispatch)=>{
    dispatch({type:LOAD})
try {
    const res=  await  axios.post('/api/users/SignUp',user)

    dispatch({type:REGISTER, payload:res.data})  // {msg,user,token}

    history.push('/Profile')

} catch (error) {
    dispatch({type:FAIL, payload: error.response.data})
}
}

export const login=(user,history)=>async(dispatch)=>{

dispatch({type:LOAD})

    try {
        const res= await axios.post('/api/users/SignIn',user)
        dispatch({type:LOGIN, payload:res.data}) // msg,found(user),token
        // console.log(res.data.found)
        history.push('/Profile')
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})
        // error.response.data.errors.map(el=>  alert(el.msg))
    }
}

export const current=()=>  async (dispatch)=>{
    const config={

        headers:{
            Authorization: localStorage.getItem('token')
        }

    }
    try {
        const res= await axios.get('/api/users/current',config)
        dispatch({type:CURRENT,  payload: res.data.user})

    } catch (error) {
        console.log(error)
    }
}

export const logout=()=>{
    return {type:LOGOUT}
}
export const clearerrors=()=>{
    return {type:CLEARERRORS}
}