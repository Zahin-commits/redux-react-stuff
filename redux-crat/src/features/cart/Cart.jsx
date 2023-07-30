import { useDispatch, useSelector } from "react-redux" 
import { cartItems, deleteCart, updateCart } from "./cartSlice";
import { useEffect } from "react";


export const Cart = () => {
  const state = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartItems());

      console.log(state);
  }, [])

  const fetchItem = ()=>{
    console.log(state);
  }

    const handleChange = (e,id)=>{
    console.log(e.target.value);

    dispatch(updateCart({id,change:{quantity:+e.target.value}}))
    }

 
  return (
    <div className="container">
     {state.status == 'loading' && <h1>Loading...</h1>}

     {state.items && state.items.map((item) => <div key={item.id} className="cart-item">
        <img
          className="img-fluid"
          src={item.thumbnail}
          alt=""
        />
        <div className="description">
          <p>{item.title}</p>
          <span>{item.brand}</span>
          <strong>${item.price}</strong>
        </div>
        <div className="quantity">
          Quantity
          <select value={item.quantity} onChange={e=>{handleChange(e,item.id)}} >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className='close'>
          <button onClick={()=>dispatch(deleteCart(item.id))} >X</button>
        </div>
      </div>
        )}

   <h1>Total: ${state.items.reduce((acc, item)=>item.price*item.quantity+acc ,0 )}</h1>
    </div>
  )
}


/* {state.status == 'idle' && <button onClick={e=>fetchItem()}>fetch cart</button>} */

/* {state.status == 'successful' && state.value.products.map(item=>(
       <div key={item.id} className="card">
       <img src={item.images[0]} alt="" />
       <h1>{item.title}</h1>
       <p className="price">${item.price}</p>
       <p>{item.description}</p>
       <button>Add to Cart</button>
     </div>
))} */