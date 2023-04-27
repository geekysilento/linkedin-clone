import {  CommentOutlined, ReplyOutlined, ShareOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React , { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'

const Post = forwardRef(({name, description, message, photoUrl}, ref) =>  {
  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoUrl}></Avatar>
            <div className="post__info">
                <h2> {name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOutlined} title="Like"  />
          <InputOption Icon={CommentOutlined} title="Comment" />
          <InputOption Icon={ReplyOutlined} title="Reply" />
          <InputOption Icon={ShareOutlined} title="Share" />
        </div>


    </div>
  );
})

export default Post