import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ titles, onTitleSelect }) => {
  const renderedList = titles.map((title) => {
    return (
      <VideoItem
        key={title.data[0].nasa_id}
        onTitleSelect={onTitleSelect}
        title={title}
      />
    )
  })

  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  )
}

export default VideoList
