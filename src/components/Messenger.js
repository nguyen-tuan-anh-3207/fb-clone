import React from 'react'
import Search from './Input/Search'
import { MoreHoriz, AspectRatio, VideoCall, Create } from '@material-ui/icons'
import User from './Chat/User'

const messages = 'Kill me, you can try'
const Messenger = () => {
  return (
    <>
      <div className='messenger__header'>
        <div>Messenger</div>
        <div className='messenger__header--actions'>
          <MoreHoriz />
          <AspectRatio />
          <VideoCall />
          <Create />
        </div>
      </div>
      <div className='search-input'>
        <Search />
      </div>
      <div>
        <User message={messages} />
        <User message={messages} />
        <User message={messages} />
        <User message={messages} />
        <User message={messages} />
        <User message={messages} />
        <User message={messages} />
      </div>
    </>
  )
}

export default Messenger
