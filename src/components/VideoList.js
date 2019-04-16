import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ titles }) => {
  const renderedList = titles.map((title) => {
    return <VideoItem title={title} />
  })

  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  )
}

export default VideoList
