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
    this.setState({
      titles: response.data.collection.items,
      selectedTitle: response.data.collection.items[0]
    })
  }

  onTitleSelect = title => {
    this.setState({ selectedTitle: title })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail title={this.state.selectedTitle} />
            </div>
            <div className='six wide column'>
              <VideoList onTitleSelect={this.onTitleSelect} titles={this.state.titles} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
