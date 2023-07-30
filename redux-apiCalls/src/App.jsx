import {useDispatch, useSelector} from 'react-redux';
import { fetchTodo } from './redux/slice/todo';

function App() {
const dispatch = useDispatch();
const state = useSelector(state => state);

if(state.todo.isLoading){
  return <h1>loading...</h1>
}
  return (
    <>
    <button onClick={e=>dispatch(fetchTodo())}>Fetch todos</button>

    {
     state.todo.data && state.todo.data.map(e=>(
        <p>{e.title}</p>
      ))
    }
    </>
  )
}

export default App
