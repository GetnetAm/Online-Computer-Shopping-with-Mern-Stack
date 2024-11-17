import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../Redux/actions/cartAction";
import MessageBox from "../coponents/Box/MessageBOx";

function CartScreen() {
  const [qty, setQty] = useState();
  const userSignin= useSelector((state)=> state.userSignin);
  const { userInfo }= userSignin;
  const { id } = useParams();
  const cart=useSelector((state)=>state.cart);
  const {cartItems}=cart;
  // const cart = useSelector((state) => state.cart);
  // const { cartItems, qty } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = (id) => {
    <>
    {userInfo ?(navigate("/shipping"))
      :( navigate("/signin"))
    }
    </>

   
  };

  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.cartItems.reduce((total, item) => total + (item.price * item.qty), 0);

  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => item.qty + qty, 0);
  // };

 
  return (
    <div className="row top">
      <div className="col-2">
        <h1 className="shoping_cart">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            <div className="cart_empty">
              Cart is empty.
              <img src="../images/cart1.jpeg" alt="" className="empty_cart" />
            </div>
            <Link to="/home">
              <div className="go_shopping">
                Go Shopping
                <img
                  src="../images/shoping1.jpg"
                  alt=""
                  className="go_shopping_img"
                />
              </div>
            </Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img className="small" src={item.image} alt={item.name} />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product), parseInt(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>


                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              {/* subtotal({cartItems.reduce((a, c)=> a+ c.qty, 0)} items):
              ${cartItems.reduce((a, c)=>a +c.price *c.qty, 0)} */}
              {/* <h3>({getCartCount()}) items</h3> */}
                <h3>{totalItems} total Items</h3>
              {/* <h3>
                Subtotal : ${" "}
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h3> */}
              <div><h3>
              Total Cart Price: {totalPrice}
                </h3></div>
            </li>
            <li>
              <button
                type="button"
                onClick={checkOutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
