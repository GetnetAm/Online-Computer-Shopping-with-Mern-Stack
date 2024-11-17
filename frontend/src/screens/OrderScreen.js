import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../coponents/CheckoutSteps";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../coponents/Box/LoadingBox";
import MessageBox from "../coponents/Box/MessageBOx";
import { useEffect } from "react";
import { detailsOrder } from "../Redux/actions/createOrder";

export default function OrderScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const { id } = useParams();
  const  orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;
  

  useEffect(()=>{
  dispatch(detailsOrder(id))
 
  }, [dispatch, id])

  const PlaceOrdeHandler=()=>{

  }

  return (
    loading ?(<LoadingBox></LoadingBox>):
    error? (<MessageBox variant="danger">{error}</MessageBox>)
    :(
    <div>
        <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>
                  {order.shippingAddress.fullName}
                  <br />
                  <strong>Address:</strong>
                  {order.shippingAddress.address},
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>

                {order.isDelivered ?(
                    <MessageBox variant="success">
                       <span className="success">
                       Delivered at {order.deliveredAt}
                       </span>

                    </MessageBox>
                ):(
                    <MessageBox variant="danger" className="danger">
                      <span className="danger">
                      Not Deliverd
                      </span>

                    </MessageBox>
                )}
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ?(
                    <MessageBox variant="success">
                       <span className="success">
                       Paid at {order.deliveredAt}
                       </span>

                    </MessageBox>
                ):(
                    <MessageBox variant="danger" className="danger">
                      <span className="danger">
                      Not Paid
                      </span>

                    </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            className="small"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} X ${item.price}=${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Order Total</div>
                  <div>${order.totalPrice.toFixed(2)}</div>
                </div>
              </li>

              <button>
              <div className="paypal_img">
                <img src="../images/paypal1.png" alt="" className="paypal" />
                </div>

              </button>
               
              
             
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  );
}
