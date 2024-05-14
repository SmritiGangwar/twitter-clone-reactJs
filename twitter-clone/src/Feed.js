import React, {useEffect, useState} from "react";
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from "react-flip-move";

function Feed() {
  const[posts, setPosts] = useState([]);

  useEffect(()=>{
    // piece of code runs on a given condition
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  },[]);


  return (
    <div className="feed">
        {/* Header */}
        <div className="feed-header">
          <h2>Home</h2>
        </div>
        

        <TweetBox/>

        {/* Posts */}
        <FlipMove>
        {posts.map(post =>(
          <Post 
          key={post.text}
          displayName={post.displayName} 
          userName={post.userName} 
          verified={post.verified} 
          text={post.text} 
          avatar={post.avatar}
          image={post.image} /> 
          
        ))}
        </FlipMove>
        
    </div>
  );
}

export default Feed