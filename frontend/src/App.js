import "./App.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import { signout } from "./Redux/actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import AdminDashboard from "./coponents/admin/AdminDashboard";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PriveateRoute from "./coponents/PriveateRoute";
import ProtectedRoute from "./coponents/PriveateRoute";
import Footer from "./coponents/footer/Footer";
import HeroScreen from "./screens/HeroScreen";
import { FaCartArrowDown } from "react-icons/fa6";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const singoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              Getware CompStore  
            </Link>
          </div>
          <div>
           
            <Link to="/home" className="shopping">
            <FaCartArrowDown className="shopping_icon" />
             Shopping</Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i class="fa-solid fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/profile">User Details</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={singoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>

          {
            userInfo && userInfo.isAdmin &&(
              <div className="dropdown">
                <Link to="#admin">Admin <i class="fa-solid fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li><li>
                    <Link to="/dashboard">Products</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">User</Link>
                  </li>


                </ul>
              </div>
            )
          }
        </header>

        <main>
          {/* {userInfo && userInfo.isAdmin===true ?
            (
              <Routes>
                 <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            ):
            ( */}

          {/* {
                 userInfo && userInfo.isAdmin?(
                    <Routes>
                       <Route path="/" element={<AdminDashboard />} />

                    </Routes>
                    

                  ):
                  (
                  ) } */}
          <Routes>
          <Route path="/" element={<HeroScreen />}  />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
            {/* <PriveateRoute path="/profile" element={<ProfileScreen/>} /> */}

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              }
            />
          </Routes>
          
          
         
              

     
        </main>

        {/* <footer className="row center"> */}
          <Footer />
{/* 
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
