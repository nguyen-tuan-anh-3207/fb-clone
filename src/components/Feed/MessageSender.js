import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import './Feed.css'

const MessageSender = () => {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setInput('')
    setImageUrl('')
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input
            value={input}
            placeholder='What is on your mind'
            className='messageSender__input'
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='image URL (Optional)'
          />

          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: 'orange' }} />
          <h3>Feeling/Active</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
