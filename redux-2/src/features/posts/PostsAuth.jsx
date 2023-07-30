import { useSelector } from "react-redux";
import { selectAllUSers } from "../users/usersSlice";


import React from 'react'

const PostAuth = ({ userId }) => {
    const users = useSelector(selectAllUSers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuth