import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectPosts, isLoadingPosts, getPosts} from './postsSlice.js';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsIsLoading = useSelector(isLoadingPosts)


    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch]);
    
    if (postsIsLoading) {
        return <div>Loading...</div>
    } else if (!posts) {
        return <div>No posts</div>
    }

    const isImage = url => url.match(/\.(jpeg|jpg|png)$/) !== null;

    if(!postsIsLoading) {

        
        
        return (
            <div>
            <p>Doneski</p>

                <ul>

                    {Object.values(posts).map((post, i) => (
                        
                        
                        <li key={i}>
                            <div className="post-container">
                                <h2>{post.title}</h2>
                                <p>{post.selftext}</p>

                            { isImage(post.url) ? (<img className="post-img" src={post.url}/>) : ("") }
                            
                            </div>
                        </li>
                    ))}

                </ul>
             </div>
        )
        
    }


}