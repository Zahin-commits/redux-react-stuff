import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTodo = createAsyncThunk('fetchTodos',async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  
  return response.json();
})

const initialState = {
 isLoading:false,
 data:null,
 isError:false
}

const todoSlice = createSlice({
 name:'todo',
 initialState,
 extraReducers:(builer)=>{

    builer.addCase(fetchTodo.pending,(state)=>{
        state.isLoading = true
    });

    builer.addCase(fetchTodo.fulfilled,(state,action)=>{
    state.isLoading = false;
    state.data = action.payload;
    });

    builer.addCase(fetchTodo.rejected,(state, action)=>{
        state.isLoading = false;
        state.isError = true;
        console.log('Error', action.payload);
    })
 }
});

export default todoSlice.reducer;