import React from 'react'
import Sidebarrow from './sidebarrow'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import "../sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>
      <Sidebarrow selected Icon={HomeSharpIcon} title={"Home"} />
      <Sidebarrow Icon={WhatshotSharpIcon} title={"Trending"} />
      <Sidebarrow Icon={SubscriptionsSharpIcon} title={"Subscription"} />
      <hr/>
      <Sidebarrow Icon={VideoLibrarySharpIcon} title={"Library"} />
      <Sidebarrow Icon={RestoreSharpIcon} title={"History"} />
      <Sidebarrow Icon={OndemandVideoSharpIcon} title={"Your videos"} />
      <Sidebarrow Icon={WatchLaterSharpIcon} title={"Watch Later"} />
      <Sidebarrow Icon={ThumbUpOutlinedIcon} title={"Liked videos"} />
      <Sidebarrow Icon={ExpandMoreOutlinedIcon} title={"Show more"} />
      <hr></hr>
    </div>
  )
}

export default Sidebar
