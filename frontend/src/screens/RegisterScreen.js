
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register, signin } from '../Redux/actions/userActions';
import LoadingBox from '../coponents/Box/LoadingBox';
import MessageBox from '../coponents/Box/MessageBOx';
import { toast } from 'react-toastify';

function RegisterScreen() {
const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');

  
  const userSignin= useSelector((state)=> state.userSignin);
  const { userInfo, loading, error }= userSignin;

  const dispatch =useDispatch();
  const navigate=useNavigate();
  const submitHandler=(e)=>{
    e.preventDefault();
    if(password !== confrimPassword){
        toast("Password and confrim password are not match");
    }else{
        dispatch(register(name, email, password));

    }

    
   

    //TODo: 
  }

  useEffect(()=>{
    if(userInfo){
      navigate("/home");
    }

  }, [userInfo])
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
        <div>
            <h1>Register </h1>
        </div>

        {
          loading && <LoadingBox></LoadingBox>
        }
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        <div>
        <label htmlFor="name">Name</label>
        <input
        type="name"
        id="name"
        placeholder="Enter Name"
        required
        onChange={(e)=>setName(e.target.value)}>
            
        
        </input>
    </div>
    <div>
        <label htmlFor="email">Email Address</label>
        <input
        type="email"
        id="email"
        placeholder="Enter Email"
        required
        onChange={(e)=>setEmail(e.target.value)}>
            
        
        </input>
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        placeholder="Enter Password"
        required
        onChange={(e)=>setPassword(e.target.value)}>
            
        
        </input>
    </div>

    <div>
        <label htmlFor="Cpassword">Password</label>
        <input
        type="password"
        id="password"
        placeholder="Enter Confrim Password"
        required
        onChange={(e)=>setConfrimPassword(e.target.value)}>
            
        
        </input>
    </div>

    <div>
      <label>
        <button className="primary">SignUp</button>
      </label>
    </div>

    <div>
      <label />
      <div>
        New Customer ? <Link to="/signin" >Login Hire</Link>
      </div>
    </div>



    </form>
      
    </div>
  )
}

export default RegisterScreen;
