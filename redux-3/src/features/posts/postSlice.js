import { createSlice , nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

export const fetchPosts = createAsyncThunk('fetchdata',async()=>{
    try {
      const {data} = await axios.get(POSTS_URL);
 return data;
    } catch (error) {
        return error.message
    }

})

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
    postAdded:{
        reducer(state,action){
     state.posts.push(action.payload);
    },
    prepare(title,content,userId){
        return{
            payload:{
             id:nanoid(),
             title,
             content,
             date: new Date().toISOString(),
             userId
            }
        }
    }

},

    },
extraReducers:(builder)=>{
 builder.addCase(fetchPosts.pending,(state,action)=>{
    state.status = 'loading';
 });

 builder.addCase(fetchPosts.fulfilled,(state,action)=>{
    state.status = 'succeeded';
    state.posts = action.payload
 });
 builder.addCase(fetchPosts.rejected,(state,action)=>{
  state.status = 'failed';
  state.error = action.payload;
 })
}
});

export const selectAllPosts = (state)=>state.posts;
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;