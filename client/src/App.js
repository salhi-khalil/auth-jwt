
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import RegisterLogin from './Components/Register';
import PrivateRoute from './privateroutes/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Route  exact path='/'  render={()=><h1>this is home</h1>}   />
    <Route path='(/SignUp|/SignIn)'  component={RegisterLogin}     />
   <PrivateRoute   path='/Profile'   component={Profile} />
    
    </div>
  );
}

export default App;
