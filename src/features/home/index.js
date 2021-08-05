import React from 'react'
import Chat from '../../components/Chat/Chat'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/SideBar/Sidebar'

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Feed />
      <Chat />
    </>
  )
}

export default HomePage
