import React from 'react';

const VideoDetail = ({ title }) => {
  return (
    <div>
      {title.data[0].title}
    </div>
  )
}

export default VideoDetail
