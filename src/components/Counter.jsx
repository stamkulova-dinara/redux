import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "../store/action";

function Counter (){
  const count = useSelector((state) => state.value )
  const dispatch = useDispatch()

  
  return (
    <div>
      {/* header */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter