import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexboxgrid from './flexboxgrid.js';
import * as contentful from 'contentful';
import Header from './components/header.js';
import Main from './components/main.js';
import resources from './resources.js';


class Firstpage extends Component {


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
      <div className="Firstpage">
        <div className="container fullheight">
          <div className="row fullheight center-xs middle-xs">
            <div className="col-lg-12">
              <div className="row center-xs middle-xs">
                <div className="col-lg-6">
                  <div className="row greybox middle-xs center-xs">
                    <img className="logo" alt="ob-logo" src={this.state.logo_url}></img>
                  </div>
                </div>
              </div>

              <div className="row center-xs">
                <ul className="firstPageMenu column-sm center-xs">
                  <li className=""><a href="/#/photo/">Foto</a></li>
                  <li><a href="/#/film/">Film</a></li>
                  <li><a href="/#/brand/">Affärsutveckling</a></li>
                  <li><a href="/#/about/">Om mig</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Firstpage;
