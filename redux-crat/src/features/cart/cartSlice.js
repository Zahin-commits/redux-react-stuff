import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchItem, addItem, updateItem, deleteItem} from "./cartsAPI";

const initialState ={
 items: [],
 status: 'idle',
 error: null
};


export const cartItems = createAsyncThunk('cartItems',async()=>{
  try {
    const response = await fetchItem();
    
    return response.data;
  } catch (error) {
    return error.message;
  }
    
  });

  
export const addCart = createAsyncThunk('addCart',async(item)=>{
  try {
    const {id, title, thumbnail, brand, price} = item;

    const response = await addItem({id, title, thumbnail, brand, price, quantity:1});
    
    return response.data;
  } catch (error) {
    return error.message;
  }
    
  });

export const updateCart = createAsyncThunk('updateCart',async({id,change})=>{
  try {
    const response = await updateItem(id,change);
    
    return response.data;
    } catch (error) {
    return error.message;
   } 
 });

export const deleteCart = createAsyncThunk('deleteCart',async(id)=>{
  try {
    const response = await deleteItem(id);
    
    return id;
    } catch (error) {
    return error.message;
   } 
 });



export const cartSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
     
    },
    extraReducers:(builder)=>{
      builder.addCase(cartItems.pending,(state,action)=>{
        state.status = 'loading';
      });

      builder.addCase(cartItems.fulfilled,(state,action)=>{
        state.status = 'successful';
        state.items = action.payload;
      });

      builder.addCase(cartItems.rejected,(state,action)=>{
        state.status = 'failed';
        state.error = action.payload
      });

      builder.addCase(addCart.fulfilled,(state,action)=>{
        state.status = 'idle';
        state.items.push(action.payload);
      });

      builder.addCase(deleteCart.fulfilled,(state,action)=>{
        state.status = 'idle';
        const index = state.items.findIndex(item=>item.id===action.payload);
        state.items.splice(index,1);
      });

      builder.addCase(updateCart.fulfilled,(state,action)=>{
        state.status = 'idle';
        const index = state.items.findIndex(item=>item.id===action.payload.id);
        state.items.splice(index,1,action.payload);
      });

    }
});

// export const {} = counterSlice.actions;
export default cartSlice.reducer;