

import React, { Component } from 'react';
import * as contentful from 'contentful';
import about from './about.js';
import photo from './photo.js';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import film from './film.js';
import brand from './brand.js';


class Main extends Component {


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
      <div className="Main col-lg-12">
          <Switch>
            <Route exact path='/' component={about}/>
            <Route path='/photo/' component={photo}/>
            <Route path='/film/' component={film}/>
            <Route path='/brand/' component={brand}/>
          </Switch>
      </div>
    );

  }

}

export default Main;
