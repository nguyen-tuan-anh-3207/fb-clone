import React from 'react'
import { Avatar } from '@material-ui/core'

const User = () => {
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
      <p className='ml-10'>name</p>
    </div>
  )
}

export default User
