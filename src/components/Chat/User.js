import React from 'react'
import { Avatar } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'

const User = ({ message, action }) => {
  return (
    <div className='user-list'>
      <div>
        <div className='ml-5 user-list__avatar'>
          <Avatar
            className='user-list__img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0fyabrJCPeUGCciCqZL6_OwG8fv09euqpTCh3bxdnjhnztMAcTFUsS3idBYK6It_vk4&usqp=CAU'
          />
          <div className='user-list__online'></div>
        </div>
      </div>
      <div className='user-list__message'>
        <p className='ml-10 '>name</p>
        {message ? <p className='ml-10 opac-80'>{message}</p> : null}
      </div>
      {action ? (
        <div className='user-list__action'>
          <CheckCircle className='user-list__action--icon' />
        </div>
      ) : null}
    </div>
  )
}

export default User
