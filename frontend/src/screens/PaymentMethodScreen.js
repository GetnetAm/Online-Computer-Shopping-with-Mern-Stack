import { useState } from "react"
import CheckoutSteps from "../coponents/CheckoutSteps"
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/actions/cartAction";
import { useNavigate } from "react-router-dom";


function PaymentMethodScreen() {
    const [paymentMethod, setPaymentMethod]=useState('PayPal');

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if(!shippingAddress.address){
        navigate("/shipping");
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder")

    }
  
  return (
    <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1 style={{fontWeight:"bold", fontSize:"25px"}}>Select Payment Method</h1>
            </div>
            <div>
                <div className="payment">
                    <input
                    type="radio"
                    id="paypal"
                    value="PayPal"
                    name="paymentMethod"
                    required
                    checked
                    onChange={(e)=>setPaymentMethod(e.target.value)}>
                    </input>
                    <img src="../images/paypal1.png" alt="" className="paypal" />
                    <label htmlFor="paypal">PayPal</label>
                </div>
            </div>

            <div>
                <div className="payment">
                    <input
                    type="radio"
                    id="stripe"
                    value="Stripe"
                    name="paymentMethod"
                    required
                    
                    onChange={(e)=>setPaymentMethod(e.target.value)}>
                    </input>
                    <img src="../images/stripe1.jpeg" alt="" className="paypal" />
                    <label htmlFor="stripe">Stripe</label>
                </div>
            </div>

            <div>
                <button className="primary" type="submit">Continue</button>
            </div>


        </form>
      
    </div>
  )
}

export default PaymentMethodScreen
