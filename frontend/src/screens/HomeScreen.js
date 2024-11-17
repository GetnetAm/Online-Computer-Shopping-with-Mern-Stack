import { useEffect } from 'react'
import Product from '../coponents/Product'
// import data from '../data'
import LoadingBox from '../coponents/Box/LoadingBox';
import MessageBox from '../coponents/Box/MessageBOx';
import {useDispatch, useSelector} from "react-redux";
import { ListProducts } from '../Redux/actions/ProductActions';
// import Product from "../coponents/Product";


function HomeScreen() {
  // const [products, setProducts]= useState([]);
  // const [loading, setLoading]= useState(false);
  // const [error, setError]= useState(false);

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error, products}= productList;

  useEffect(()=>{
    dispatch(ListProducts())
  }, [dispatch]);
  
  // useEffect(()=>{
  //   const fetchData= async()=>{
  //     try{
  //       setLoading(true);
        
     
  //     const { data }= await axios.get('http://localhost:5000/api/products');
  //     setLoading(false)
  //     setProducts(data);
  //   }catch(err){
  //     setError(err.message);
  //     setLoading(false);
  //   }
  //   };
  //   fetchData();
  // }, []);

 

  return (
    <div>
      {
        loading ?(
          <LoadingBox />
        ):
        error ?(
          <MessageBox variant="danger">{error}</MessageBox>
        ):(
          <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        )
      }
    </div>
 
  )
}

export default HomeScreen
