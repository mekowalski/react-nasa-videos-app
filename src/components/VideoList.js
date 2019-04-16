import React from 'react';

const VideoList = props => {
  //props.titles, array rendered as HTML on screen
  return (
    <div>
      {props.titles.length}
    </div>
  )
}

export default VideoList
