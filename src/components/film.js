import React, { Component } from 'react';
import * as contentful from 'contentful';
import { Player } from 'video-react';
import VideoPlayer from './video-player.js';
import YouTube from 'react-youtube';

class Film extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      logo_url: null,
      film_url: null,
      asset_id: null,

    };
  }

  client = contentful.createClient({
    space: '2potjglsqrdx',
    accessToken: 'cd2fbf03d3690b9b4adfeeeec4f47778c372155185703ed9ae2741d9aed4ad38'
  })



  componentDidMount(){
    this.client.getEntries()
    .then(entries => {
      entries.items.forEach(entry => {
        if(entry.fields) {
          this.setState({items: entry.fields});

        }
      })
    })

    this.client.getAsset('5wq6J87LoWqgQ0A62kWIQ2')
      .then((asset) => {
        this.setState({logo_url: asset.fields.file.url});
      })
      .catch(console.error)


    this.client.getEntry('4QWJEFpiQ0eSGy82QOgkaI')
      .then((entry) => {
        this.setState({asset_id: entry.fields.video.sys.id});
        this.client.getAsset(this.state.asset_id)
          .then((asset) => {
            this.setState({video_url: asset.fields.file.url});
          })
          .catch(console.error);
      })
      .catch(console.error)

      fetch('https://www.googleapis.com/youtube/v3/search?q=i&maxResults=25&part=snippet&channelId=UCxJElWM129EqF-WzyiwzIpQ&key=AIzaSyAktLhBZaqmsMQIv0nPJ7WsnSlp0aNQOSU', {part: 'snippet', channelId: 'UCxJElWM129EqF-WzyiwzIpQ', key: 'AIzaSyAktLhBZaqmsMQIv0nPJ7WsnSlp0aNQOSU'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(this.state.items);
          this.render();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )




  }




  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };



    if (true){
      return (
        <div className="Film">
          <div className="col-lg-12">
            <div className="row center-xs">
              <div className="col-lg-6">
                <YouTube
                  videoId={"C_9VbfhYw4s"}
                  opts={opts}
                  onReady={this._onReady}
                />
              </div>
            </div>
          </div>
        </div>
    );
  } else {
    return null;
  }


  }

}

export default Film;
