import React from 'react';

const VideoDetail = ({ title }) => {
  if (!title) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='ui segment'>
        <h3 className='ui header'>{title.data[0].title}</h3>
        <p>{title.data[0].description}</p>
      </div>
    </div>
  )
}

export default VideoDetail

//ref path for description: title.data[0].description
