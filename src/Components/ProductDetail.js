import { useParams } from "react-router-dom";
import Dummydata from "./Authentication/pages/Cart/dummydata";
import classes from './ProductDetail.module.css';
import Button from "react-bootstrap/esm/Button";

const ProductDetail = ()=>{
    let x = useParams()
    let titan = x.id;
    console.log(titan);
    let ans  = Dummydata.filter((item)=>item.title == titan);

    console.log(ans);
    return <>
    
    <section className={classes.product} >
    <div>
    <img src={ans[0].imageUrl} alt="" />
    <div className={classes.btn} >
        <Button>BUY NOW</Button>
        <Button>ADD TO CART</Button>
    </div>
    </div>
    <div>
    <h3>Price {ans[0].price}</h3>
    {/* <h2>{ans[0].quantity}</h2> */}
    <h2>Available Offers</h2>

    <p>
    <div>
    Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
    </div>
    <div>
    Bank OfferExtra ₹1000 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹29,990 and aboveT&C
    </div>
    <div>
    Bank OfferExtra ₹2000 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹59,990 and aboveT&C
    </div>
    <div>
    Special PriceGet extra 31% off (price inclusive of cashback/coupon)T&C
    </div>

    </p>
     <section className={classes.images}>
     
   
   <img src={ans[0].imageUrl} alt="" className={classes.img1}/>
   <img src={ans[0].imageUrl} alt="" className={classes.img2}/>
   <img src={ans[0].imageUrl} alt="" className={classes.img3}/>
   <img src={ans[0].imageUrl} alt="" className={classes.img4}/>
   <img src={ans[0].imageUrl} alt="" className={classes.img5}/>
   
     </section>
    
    </div>
   </section>
        <h2>Reviews</h2>
        <div>
            <p>very good product</p>
            <p>expected even more</p>
            <p>delivey was bit late</p>
        </div>
   
    
    </>
}

export default ProductDetail;