import {
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  LocalHospital
} from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'

const sidebars = [
  {
    icon: '',
    title: 'Jhin Cowboy',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0fyabrJCPeUGCciCqZL6_OwG8fv09euqpTCh3bxdnjhnztMAcTFUsS3idBYK6It_vk4&usqp=CAU'
  },
  { icon: LocalHospital, title: 'COVID-19 Information Center', src: '' },
  { icon: EmojiFlags, title: 'Pages', src: '' },
  { icon: People, title: 'Friends', src: '' },
  { icon: Chat, title: 'Messenger', src: '' },
  { icon: Storefront, title: 'Market Place', src: '' },
  { icon: VideoLibrary, title: 'Videos', src: '' }
]
const Sidebar = () => {
  return (
    <div className='sidebar'>
      {sidebars.map((sidebar) => (
        <SidebarRow
          key={sidebar.title}
          Icon={sidebar.icon}
          title={sidebar.title}
          src={sidebar.src}
        />
      ))}
    </div>
  )
}

export default Sidebar
