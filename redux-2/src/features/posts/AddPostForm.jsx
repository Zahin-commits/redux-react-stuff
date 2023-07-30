import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUSers } from "../users/usersSlice";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const users = useSelector(selectAllUSers);
 
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUserId] = useState('');

    const postHandler = (e)=>{
        e.preventDefault();
         
         console.log(title, content);

        if(title && content){
            dispatch(
             postAdded(title, content, userId)
            );
        setTitle('');
        setContent('');
        }
     
    }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
    
  return (
    <div>
        <form onSubmit={(e)=>postHandler(e)}>
          <select value={userId} onChange={e=>setUserId(e.target.value)} name="" id="" >
            <option ></option>
            {userOptions}
          </select>
       <input type="text" 
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder="title"
        />

       <input type="text" 
        onChange={(e)=>{setContent(e.target.value)}}
        placeholder="content"
        />

       <button disabled={!canSave} >save post</button>
        </form>
    </div>
  )
}

export default AddPostForm