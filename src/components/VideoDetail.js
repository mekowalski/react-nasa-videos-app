import React from 'react';

const VideoDetail = ({ title }) => {
  if (!title) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='ui segment'>
        <img className='ui fluid image' src={title.links[0].href} />
        <h3 className='ui header'>{title.data[0].title}</h3>
        <p>Center: {title.data[0].center}</p>
        <p>Date: {title.data[0].date_created}</p>
        <p>{title.data[0].description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
