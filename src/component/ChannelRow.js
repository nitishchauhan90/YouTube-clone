import React from 'react'
import "../ChannelRow.css"
import { Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image,Channel,subs,noOfVideos,description,verified}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo' alt='{}' src={image}/>
      <div className="channelRow_text">
        <h4>{Channel} {verified && <CheckCircleOutlineIcon/>}</h4>
        <p>
            {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
