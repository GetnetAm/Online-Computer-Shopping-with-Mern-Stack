import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../Redux/actions/userActions";
import LoadingBox from "../coponents/Box/LoadingBox";
import MessageBox from "../coponents/Box/MessageBOx";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const redirect = props.location.search ?
  // props.location.search.split('=')[1]
  // :'/';
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

    //TODo:
  };

  useEffect(() => {
    if (userInfo) {
      <>{cartItems.length > 0 ? navigate("/cart") : navigate("/")}</>;
    }
  }, [userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>

        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label>
            <button className="primary">SignUp</button>
          </label>
        </div>

        <div>
          <label />
          <div>
            New Customer ? <Link to="/register">Create Your Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
