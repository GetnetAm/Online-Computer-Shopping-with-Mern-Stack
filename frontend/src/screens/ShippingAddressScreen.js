import { useState } from "react";
import CheckoutSteps from "../coponents/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../Redux/actions/cartAction";
import { useNavigate } from "react-router-dom";


export default function ShippingAddressScreen(props){
    
    const dispatch= useDispatch();
    const navigate= useNavigate();
  
    const userSignin= useSelector((state)=> state.userSignin);
    const { userInfo }= userSignin;
    const cart=useSelector((state)=>state.cart);
    const {shippingAddress}=cart;

    if(!userInfo){
        navigate("/signin")
    }
    const [fullName, setFullName]= useState(shippingAddress.fullName);
    const [address, setAddress]= useState(shippingAddress.address);
    const [city, setCity]= useState(shippingAddress.city);
    const [postalCode, setPostalCode]= useState(shippingAddress.postalCode);
    const [country, setCountry]= useState(shippingAddress.country);


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}));
        navigate("/payment");
        
        

    }
    return(
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>

                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                    type="text"
                    id="fullname"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e)=> setFullName(e.target.value)}
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                    type="text"
                    id="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="postal code">Postal Code</label>
                    <input
                    // type="text"
                    id="postal code"
                    placeholder="Enter Postal Code"
                    value={postalCode}
                    onChange={(e)=> setPostalCode(e.target.value)}
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                    type="text"
                    id="country"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e)=> setCountry(e.target.value)}
                    required>
                    </input>
                </div>

                <label />
                <button className="primary" type="submit">
                    Continue
                </button>

            </form>
        </div>
    )
}