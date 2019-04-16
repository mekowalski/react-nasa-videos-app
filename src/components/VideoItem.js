import React from 'react';

const VideoItem = ({ title }) => {
  return (
    <div>
      <img src={title.links[0].href} />
      {title.data[0].title}
    </div>
  )
}

export default VideoItem
