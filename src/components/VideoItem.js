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

//what properties to refer to inside the object
//ref path: title.data[0].title to print out the title of each item

//try to display an image
//ref path: title.links[0].href to get the thumbnail image
