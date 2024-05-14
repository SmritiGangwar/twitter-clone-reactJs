import React from 'react'
import "./Widgets.css"

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets-input">
            <SearchIcon className="widgets-searchIcon"/>
            <input placeholder="Search Twitter" type="text"></input>
        </div>

        <div className="widgets-widgetsContainer">
          <h2>What's happening </h2>

          <TwitterTweetEmbed tweetId={"1633840509553872897"}></TwitterTweetEmbed>
          
          <TwitterTimelineEmbed sourceType="profile" screenName="bbrightvc" options={{height:200}} ></TwitterTimelineEmbed>
          <br/>
          <TwitterShareButton url={"https://twitter.com/bbrightvc/status/1642083915350556673?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Abbrightvc%7Ctwcon%5Es1"}></TwitterShareButton>
        </div>
    </div>
  );
}

export default Widgets