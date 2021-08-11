import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';
import about from './about.js';
import photo from './photo.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import film from './film.js';
import brand from './brand.js'

class Footer extends Component {


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
    space: resources.data.space,
    accessToken: resources.data.accessToken
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
  }


  render() {
    return (
      <div className="Footer col-xs-12">
        <div className="row col-xs-12 footerContainer center-xs">
          <div className="col-xs-3">
          </div>
          <div className="col-lg-3 start-xs col-xs-12">
            <p>Olivia Beatrice</p>
            <p>Smedjegatan 2</p>
            <p>285 31  Markaryd</p>
          </div>
          <div className="col-lg-3 start-xs col-xs-12">
            <p>Tel: +46 (0) 730 88 52 30</p>
            <p>E-mail: olivia@oliviabeatrice.se</p>
          </div>
          <div className="col-lg-3">
          </div>
        </div>
      </div>

    );

  }

}

export default Footer;

function Title(props) {
  return <h1 className="pageTitle">{props.page}</h1>
}
