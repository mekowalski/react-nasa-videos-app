import React from 'react';
import SearchBar from './SearchBar';
import nasaVideosApi from '../api/nasaVideosApi';

class App extends React.Component {
  state = { titles: [] }

  onTermSubmit = async term => {
    const response = await nasaVideosApi.get('/search', {
      params: {
        q: term,
        media_type: 'video'
      }
    })
    this.setState({ titles: response.data.items })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        I have {this.state.titles.length} titles
      </div>
    )
  }
}

export default App


//1. async await
//2. set response as state. using `videos: []` because i don't want to confuse myself with the keys
//3. when user searches for something and get back a list of titles(technically, not videos)
//4. take that list of titles and set it on state. (maybe it should be titles not videos)
