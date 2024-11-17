import { useNavigate } from "react-router-dom";
import LoadingBox from "../coponents/Box/LoadingBox";
import MessageBox from "../coponents/Box/MessageBOx";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { listOrderMine } from "../Redux/actions/createOrder";

export default function OrderHistoryScreen(){
    const navigate= useNavigate()
    const  orderMineList=useSelector((state)=> state.orderMineList);
    const {loading, error, orders}=orderMineList;
    
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(listOrderMine())
    }, [dispatch]);
    return(
        <div>
            <h1>Order History</h1>
            {loading? <LoadingBox></LoadingBox>:
            error? <MessageBox variant="danger">{error}</MessageBox>
            :(
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERD</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=>(
                            <tr key={order._id}>
                                <td>{order.createdAt}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.isPaid ?order.paidAt:'No'}</td>
                                <td>{order.isDelivered? order.deliveredAt:"No"}</td>
                                <td>
                                    <button type="button" className="small"
                                    onClick={()=> navigate(`/order/`)}>
                                     Details   
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            )
            }
        </div>
    )
    
}