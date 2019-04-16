import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ titles }) => {
  const renderedList = titles.map((title) => {
    return <VideoItem title={title} />
  })

  return (
    <div>
      {renderedList}
    </div>
  )
}

export default VideoList

//destructure props
//map over the videl titles
//return item component
//get list to appear on screen
//eventually pass it as a props to VideoItem

//what properties to refer to inside the object
//ref path: title.data.title to print out the title of each item
