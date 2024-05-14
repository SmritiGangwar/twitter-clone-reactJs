
import React ,{useState} from "react"
import "./TweetBox.css"
import{Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");

  const sendTweet = (e) =>{
    e.preventDefault();

    db.collection("posts").add({
      displayName : "Bright",
      userName: "bbrightvc",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1690782755230220288/tRKXuCNd_400x400.jpg"
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
  <div className="tweetBox">

  <form>
      <div className='tweetBox-input'>
          <Avatar src="https://pbs.twimg.com/profile_images/1690782755230220288/tRKXuCNd_400x400.jpg"></Avatar>
          <input 
          onChange={(e)=> setTweetMessage(e.target.value)}
         value={tweetMessage} placeholder="What's happening?"></input>

      
      </div>
      <input 
      value = {tweetImage}
      onChange={e => setTweetImage(e.target.value)}
      className="tweetBox-imageInput" placeholder="Optional: Enter image URL"></input> 
          {/* Image URL will be optional if user want to insert photot in tweet or not */}
      
      <Button onClick={sendTweet} type="submit" className="tweetBox-tweetButton">Tweet</Button>
  </form>
</div>
);
  
}

export default TweetBox