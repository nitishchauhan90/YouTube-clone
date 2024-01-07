import { Avatar } from '@mui/material'
import React from 'react'
import "../recommendedVideos.css"
function VideoCard({image,title,channel,views ,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
        <img src={image} alt="" className='thumbnail'/>
        <div className='videocard_info'>
            <Avatar
                className='videoCard_avatar'
                alt={channel}
                src={channelImage}
            />
            <div className='videoCard_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default VideoCard
