import React, { Component } from 'react';
import * as contentful from 'contentful';
import { Player } from 'video-react';
import VideoPlayer from './video-player.js';

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
              console.log(this.state.video_url);
            })
            .catch(console.error);
        })
        .catch(console.error)






  }




  render() {
    console.log('render' + this.state.video_url);
    return (
      <div className="Film">
        <div className="col-lg-12">
          <div className="row center-xs">
            <div className="col-lg-6">
                <VideoPlayer source={'http:' + this.state.video_url}>
                  <source src={this.state.video_url} />
                </VideoPlayer>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default Film;
