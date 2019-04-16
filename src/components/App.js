import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import nasaVideosApi from '../api/nasaVideosApi';

class App extends React.Component {
  state = { titles: [], selectedTitle: null }

  onTermSubmit = async term => {
    const response = await nasaVideosApi.get('/search', {
      params: {
        q: term,
        media_type: 'video'
      }
    })
    this.setState({ titles: response.data.collection.items })
  }

  onTitleSelect = title => {
    this.setState({ selectedTitle: title })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail title={this.state.selectedTitle} />
        <VideoList onTitleSelect={this.onTitleSelect} titles={this.state.titles} />
      </div>
    )
  }
}

export default App
