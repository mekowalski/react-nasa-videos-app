import React from 'react';

const VideoDetail = ({ title }) => {
  if (!title) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      {title.data[0].title}
    </div>
  )
}

export default VideoDetail
