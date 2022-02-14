import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearerrors, login, register } from '../redux/Actions/useractions'
import {useHistory} from "react-router-dom"
function RegisterLogin() {
  const [regname,setregname]=useState("")
  const [regemail,setregemail]=useState("")
  const [regpassword,setregpassword]=useState("")
  const [sigemail,setsigemail]=useState('')
  const [sigpassword,setsigpassword]=useState('')
  const dispatch = useDispatch()
  const history=useHistory()
  const errors=useSelector(state=>state.UserReducer.errors)
    return (


        <div>

          {errors && errors.map(el=> alert(el.msg))}
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label">Email</label>
          <input id="user" type="text" className="input"  value={sigemail} onChange={(e)=>{ setsigemail(e.target.value); dispatch(clearerrors())}  } />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"  value={sigpassword} onChange={(e)=> {setsigpassword(e.target.value); dispatch(clearerrors())}  } />
        </div>
        <div className="group">
          <input id="check" type="checkbox" className="check" defaultChecked />
          <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
        </div>
        <div className="group">
          <input  className="button" defaultValue="Sign In"   onClick={()=>dispatch(login({email:sigemail, password:sigpassword},history))} />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </div>
      {/* signup */}
      <div className="sign-up-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" type="text" className="input"    value={regname}  onChange={(e)=>setregname(e.target.value)} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"  value={regpassword}  onChange={(e)=>setregpassword(e.target.value)}   />
        </div>
        
        <div className="group">
          <label htmlFor="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input"   value={regemail}  onChange={(e)=>setregemail(e.target.value)} />
        </div>
        <div className="group">
          <input  className="button" defaultValue="Sign Up"  onClick={()=>dispatch(register({name:regname,password:regpassword,email:regemail},history))}  />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <label htmlFor="tab-1">Already Member?
          </label></div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default RegisterLogin
