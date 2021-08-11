import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';
import about from './about.js';
import photo from './photo.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import film from './film.js';
import brand from './brand.js'
import * as Markdown from 'react-markdown'


class About extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      page_title: [],
      text_1: [],
      text_2: [],
      page_picture: []
    };
  }

  client = contentful.createClient({
    space: resources.data.space,
    accessToken: resources.data.accessToken
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



      this.client.getEntry('5eYkbxPQjmEaGSIYa0yoea')
        .then((entry) => {
          this.setState({page_title: entry.fields.pageTitle});
        })
        .catch(console.error)

      this.client.getAsset('5HIDZ64u6QSeW0Kg2ou00o')
        .then((asset) => {
          this.setState({page_picture: asset.fields.file.url});
        })
        .catch(console.error)

      this.client.getEntry('5HWQmGntCwu40SYKq6woaQ')
        .then((entry) => {
          this.setState({text_1: entry.fields.text1,
          text_2: entry.fields.text3});
        })
        .catch(console.error)

  }


  render() {

    return (
      <div className="About">
        <div className="col-lg-12">
          <div className="row center-xs">
            <div className="col-lg-6 center-xs row">
              <Markdown source={this.state.text_1}></Markdown>
              <div className="bocks-pic col-xs-6 center-xs" ><img alt='' class="logo" src={this.state.page_picture}/></div>
              <Markdown source={this.state.text_2}></Markdown>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default About;
