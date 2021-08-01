import React from 'react'
import './Widget.css'

const Widget = () => {
  return (
    <div className='widgets'>
      <iframe
        src='https://www.w3schools.com'
        frameborder='0'
        width='250'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  )
}

export default Widget
