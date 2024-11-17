
import cover_comp from "./../assests/images/s3.jpeg"
import cover1 from "./../assests/images/sc3.jpeg"
import cover3 from "./../assests/images/sc1.jpg"
import l1 from "../assests/images/laptop/l1.jpeg"
import l2 from "../assests/images/laptop/l2.jpeg"
import l3 from "../assests/images/laptop/l3.jpeg"
import l4 from "../assests/images/laptop/l4.jpeg"
import l5 from "../assests/images/laptop/l5.jpeg"
import l12 from "../assests/images/laptop/l12.jpeg"
import l13 from "../assests/images/laptop/l13.jpeg"
import l14 from "../assests/images/laptop/l14.jpeg"
import l15 from "../assests/images/laptop/l15.jpeg"
import l16 from "../assests/images/laptop/l16.jpeg"
import l17 from "../assests/images/laptop/l17.jpeg"
import l18 from "../assests/images/laptop/l18.jpeg"
import l19 from "../assests/images/laptop/l5.jpeg"
import l20 from "../assests/images/laptop/l20.jpeg"


import d1 from "../assests/images/desktop/d1.jpeg"
import d2 from "../assests/images/desktop/d2.jpeg"
import d3 from "../assests/images/desktop/d3.jpeg"
import d4 from "../assests/images/desktop/d4.jpeg"
import d5 from "../assests/images/desktop/d5.jpeg"
import d6 from "../assests/images/desktop/d6.jpeg"
import d7 from "../assests/images/desktop/d7.jpeg"
import d15 from "../assests/images/desktop/d15.jpeg"
import d16 from "../assests/images/desktop/d16.jpeg"
import d17 from "../assests/images/desktop/d17.jpeg"
import d18 from "../assests/images/desktop/d18.jpeg"
import d19 from "../assests/images/desktop/d19.jpeg"
import d20 from "../assests/images/desktop/d20.jpeg"



import "./style/hero.css"
import { Link } from "react-router-dom"


function HeroScreen() {
  return (
    <div className="container">
      <div className='header_cover'>
        <div className='home_img'>
        <img className="cover_one"  src={cover1} alt="cover1" />
          <img className="cover_img1"  src={cover_comp} alt="cover" />
          <img className="cover_three"  src={cover3} alt="cover3" />

         


        </div>
       

      </div>

      


      <div className="shopping_part">
      <div className="body_title">
        <h3>  <h3>Our Different Laptop Store <span style={{ color:"white", textDecoration:"underline"}}>Buy Hire</span></h3></h3>

      </div>
      <div className="laptop_shop">
      <div className="comp_img">
          <img  src={l2} alt="" className="l_img"/>
       
          <h5>Hp Laptop v11</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l1} alt="" className="l_img"/>
       
          <h5>Hp Core i9</h5>
          <p>$210</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l3} alt="" className="l_img"/>
       
          <h5>Lenvo core i9</h5>
          <p>$400</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l4} alt="" className="l_img"/>
       
          <h5>Apple Pc</h5>
          <p>$550</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l5} alt="" className="l_img"/>
       
          <h5>Hp core i9</h5>
          <p>$390</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>


          <div className="comp_img">
          <img  src={l16} alt="" className="l_img"/>
       
          <h5>Accer Laptop</h5>
          <p>$240</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l17} alt="" className="l_img"/>
       
          <h5>Apple Laptop</h5>
          <p>$200</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l13} alt="" className="l_img"/>
       
          <h5>Accer Laptop</h5>
          <p>$150</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l14} alt="" className="l_img"/>
       
          <h5>Hp</h5>
          <p>$400</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l15} alt="" className="l_img"/>
       
          <h5>Accer Laptop</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={l17} alt="" className="l_img"/>
       
          <h5>Apple Pc</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>



      </div>


      <div className="body_title">
        <h3>Our Different Desktop Store Buy Hire</h3>

      </div>
      <div className="laptop_shop">
      <div className="comp_img">
          <img  src={d1} alt="" className="l_img"/>
       
          <h5>Desktop</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d2} alt="" className="l_img"/>
       
          <h5>Hp Core i 9 Pc</h5>
          <p>$450</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d3} alt="" className="l_img"/>
       
          <h5>Hp Smart Pc</h5>
          <p>$250</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>

          <div className="comp_img">
          <img  src={d4} alt="" className="l_img"/>
       
          <h5>Hp Core 9</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>

          <div className="comp_img">
          <img  src={d5} alt="" className="l_img"/>
       
          <h5>HP Desktop</h5>
          <p>$200</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>

          <div className="comp_img">
          <img  src={d6} alt="" className="l_img"/>
       
          <h5>Apple Smart Desktop</h5>
          <p>$500</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d7} alt="" className="l_img"/>
       
          <h5>Apple Desktop</h5>
          <p>$200</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d15} alt="" className="l_img"/>
       
          <h5>Apple Pc</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d16} alt="" className="l_img"/>
       
          <h5>Lenvo Pc</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d17} alt="" className="l_img"/>
       
          <h5>Lenvo System unit</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>

          <div className="comp_img">
          <img  src={d18} alt="" className="l_img"/>
       
          <h5>Keybord and system</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d19} alt="" className="l_img"/>
       
          <h5>Desktop System</h5>
          <p>$300</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>
          <div className="comp_img">
          <img  src={d20} alt="" className="l_img"/>
       
          <h5>Desktop System unit</h5>
          <p>$100</p>
           <Link to="/home" className="shopping_btn">Go Shopping</Link>
           
          </div>

      </div>

    

      </div>
      


      
      
      
    </div>
  )
}

export default HeroScreen
