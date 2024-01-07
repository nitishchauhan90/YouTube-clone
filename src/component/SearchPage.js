import React from 'react'
import "../searchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneIcon/>
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow 
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--59psmm_e--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/62tymo1zomi4qdfjgrge.jpg"
        Channel="Best Developer"
        verified
        subs="666k"
        noOfVideos={233}
        description="You can find awesome programming content here ...."
        />
        <hr/>
        <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want free masterclasss..."
            channel="web devs"
            title="Build YouTube Clone"
            timestamp="58 seconds ago"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"

        />
        <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want free masterclasss..."
            channel="web devs"
            title="Build YouTube Clone"
            timestamp="58 seconds ago"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"

        />
        <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want free masterclasss..."
            channel="web devs"
            title="Build YouTube Clone"
            timestamp="58 seconds ago"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"

        />
        <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want free masterclasss..."
            channel="web devs"
            title="Build YouTube Clone"
            timestamp="58 seconds ago"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"

        />
    </div>
  )
}

export default SearchPage
