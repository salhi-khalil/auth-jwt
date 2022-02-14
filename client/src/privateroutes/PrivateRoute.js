import React from 'react'
import {Route,Redirect} from 'react-router-dom'
function PrivateRoute({component,...rest}) {

    // {component,rest} are props rest: spread the rest of the props
const token=localStorage.getItem('token')
    return (
        <div>
            {token ?   <Route component={component}  {...rest} /> :<Redirect to='SingIn'  />  }
          
        </div>
    )
}

export default PrivateRoute
