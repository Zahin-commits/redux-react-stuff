import { useDispatch, useSelector } from "react-redux" 
import { increment, decrement, reset, incrementByAmmount } from "./couterSlice"

export const Counter = () => {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <span id="count">{count}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
       <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(reset())}>reset</button>
       <button onClick={()=>dispatch(incrementByAmmount(10))}>add 10</button>
    </div>
  )
}
