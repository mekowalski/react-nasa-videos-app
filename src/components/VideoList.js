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
