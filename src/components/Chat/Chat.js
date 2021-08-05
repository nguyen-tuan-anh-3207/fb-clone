import React from 'react'
import User from './User'
import { VideoCall, Search, MoreHoriz, More } from '@material-ui/icons'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__top'>
        <div className='ml-5'>
          <h4>Users</h4>
        </div>
        <div className='chat__top--icons'>
          <div className='chat__top--option'>
            <VideoCall />
          </div>
          <div className='chat__top--option'>
            <Search />
          </div>
          <div className='chat__top--option'>
            <MoreHoriz />
          </div>
        </div>
      </div>
      <div className='chat__top--list'>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  )
}

export default Chat
