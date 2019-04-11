import React from 'react';
import SearchBar from './SearchBar'
import nasaVideosApi from '../api/nasaVideosApi'

class App extends React.Component {
  onTermSubmit = term => {
    nasaVideosApi.get('/search', {
      params: {
        q: term,
        media_type: 'video'
      }
    })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}

export default App
