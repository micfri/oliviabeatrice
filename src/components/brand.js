import React, { Component } from 'react';
import * as contentful from 'contentful'

class Brand extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      logo_url: null,
      page_title: [],
      page_text: []
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

      this.client.getEntry('3w7UD2XnXOWkE2Oow6momy')
        .then((entry) => {
          this.setState({page_title: entry.fields.pageTitle,
          page_text: entry.fields.pageText});
        })
        .catch(console.error)

  }


  render() {

    return (
      <div className="Brand">
        <div className="col-lg-12">
          <div className="row center-xs">
            <div className="col-lg-6">
              <h2>{this.state.page_text}</h2>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default Brand;
