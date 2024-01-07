import React from 'react'
import "../VideoRow.css"
function VideoRow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className='videoRow'>
        <img src={image} alt="thumbnail" />
        <div className='videoRow_text'>
            <h2>{title}</h2>
            <p className='videoRow_headline'><span className='channel'>{channel} .{" "}</span>  {subs}  Subscribers  {views} views . <span className='timeStamp'>{timestamp}</span></p>
            <p className='videoRow_discription'>{description ? description : ''}</p>
        </div>
    
      
    </div>
  )
}

export default VideoRow
