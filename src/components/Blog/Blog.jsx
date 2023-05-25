import { useEffect, useState } from 'react'
import axios from 'axios';

import url from "https://jsonplaceholder.typicode.com/posts";

const Blog = () => {
    const [post, SetPost] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                SetPost(response.data);
            })
            .catch((error) => { console.log(error) })
    }, [])
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Blog