import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

const posts = [
  {
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0fyabrJCPeUGCciCqZL6_OwG8fv09euqpTCh3bxdnjhnztMAcTFUsS3idBYK6It_vk4&usqp=CAU',
    image: 'http://lorempixel.com/800/300',
    username: 'Jhin Cowboy',
    message: 'This is my facebook'
  },
  {
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0fyabrJCPeUGCciCqZL6_OwG8fv09euqpTCh3bxdnjhnztMAcTFUsS3idBYK6It_vk4&usqp=CAU',
    image: 'http://lorempixel.com/800/300',
    username: 'Jhin Cowboy',
    message: 'This is my facebook'
  },
  {
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0fyabrJCPeUGCciCqZL6_OwG8fv09euqpTCh3bxdnjhnztMAcTFUsS3idBYK6It_vk4&usqp=CAU',
    image: 'http://lorempixel.com/800/300',
    username: 'Jhin Cowboy',
    message: 'This is my facebook'
  }
]

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post, index) => (
        <Post
          key={index}
          profilePic={post.profilePic}
          image={post.image}
          message={post.message}
          username={post.username}
        />
      ))}
    </div>
  )
}

export default Feed
