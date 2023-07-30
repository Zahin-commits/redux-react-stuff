import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchdata } from "./productsAPi";

const initialState ={
 value: [],
 status: 'idle',
 error: null
};


export const productsData = createAsyncThunk('fetchProducts',async()=>{
  try {
    const response = await fetchdata();
    
    return response.data;
  } catch (error) {
    return error.message;
  }
    
  })

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
     
    },
    extraReducers:(builder)=>{
      builder.addCase(productsData.pending,(state,action)=>{
        state.status = 'loading';
      });

      builder.addCase(productsData.fulfilled,(state,action)=>{
        state.status = 'successful';
        state.value = action.payload;
      });

      builder.addCase(productsData.rejected,(state,action)=>{
        state.status = 'failed';
        state.error = action.payload
      });
    }
});

// export const {} = counterSlice.actions;
export default productSlice.reducer;