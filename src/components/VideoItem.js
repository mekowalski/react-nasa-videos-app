import React from 'react';

const VideoItem = ({ title }) => {
  return (
    <div className='item'>
      <img className='ui image' src={title.links[0].href} />
      <div className='content'>
        <div className='header'>{title.data[0].title}</div>
      </div>
    </div>
  )
}

export default VideoItem
