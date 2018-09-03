import React, { Component } from 'react';
import * as contentful from 'contentful'

class About extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      logo_url: null,
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
          console.log("DidMount");
          console.log(this.state.items);
        }
      })
    })

    this.client.getAsset('5wq6J87LoWqgQ0A62kWIQ2')
      .then((asset) => {
        console.log(asset);
        this.setState({logo_url: asset.fields.file.url});
        console.log(this.state.logo_url);
      })
      .catch(console.error)


  }


  render() {

    return (
      <div className="About">
        <div className="col-lg-12">
          <div className="row center-xs">
            <div className="col-lg-6">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default About;
