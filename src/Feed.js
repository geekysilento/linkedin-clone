import "./Feed.css";
import React, { useEffect, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputOption from "./InputOption";
import firebase from 'firebase/compat/app';
import { db } from './firebase';

import {
  CalendarViewDay,
  EventNote,
  Image,
  SmartDisplay,
} from "@mui/icons-material";

import Post from "./Post.js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timeStamp", "desc")
    .onSnapshot(snapshot =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  
  return (
    <div className="feed">
      <div className="feed__postContainer">
        <div className="feed__input">
          <EditIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5F9" />
          <InputOption Icon={SmartDisplay} title="Video" color="#5f9b41" />
          <InputOption Icon={EventNote} title="Event" color="#c37d16" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#e16745"
          />
        </div>
      </div>
      <FlipMove>

      {posts.map(({id, data :{name ,description, message, photoUrl } }) => (
        <Post
        key = {id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
      />
      ))}
      </FlipMove>

      
    </div>
  );
}

export default Feed;
