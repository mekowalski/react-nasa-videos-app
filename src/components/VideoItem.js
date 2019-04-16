import React from 'react';

const VideoItem = ({ title }) => {
  return (
    <div>
      {title.data[0].title}
    </div>
  )
}

export default VideoItem

//what properties to refer to inside the object
//ref path: title.data.title to print out the title of each item
