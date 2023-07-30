import { useDispatch, useSelector } from "react-redux" 
import { productsData } from "./productsSlice";
import { useEffect } from "react";
import { addCart } from "../cart/cartSlice";


export const Products = () => {
  const state = useSelector((state)=>state.product);
  const dispatch = useDispatch();

  const fetchItem = ()=>{
    dispatch(productsData());

    console.log(state.value)
  }

  useEffect(() => {
    dispatch(productsData());
  
  }, [])
  

  return (
    <div className="container">
      {state.status == 'idle' && <button onClick={e=>fetchItem()}>fetch products</button>}

      
    
     {state.status == 'loading' && <h1>Loading...</h1>}

{state.status == 'successful' && state.value.products.map(item=>(
       <div key={item.id} className="card">
       <img src={item.images[0]} alt="" />
       <h1>{item.title}</h1>
       <p className="price">${item.price}</p>
       <p>{item.description}</p>
       <button onClick={()=>dispatch(addCart(item))} >Add to Cart</button>
     </div>
))}

    </div>
  )
}