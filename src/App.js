import React, { Component } from 'react';
import logo from './logo.svg';
import resources from './resources.js';
import './App.css';
import Flexboxgrid from './flexboxgrid.js';
import * as contentful from 'contentful';
import Header from './components/header.js';
import Main from './components/main.js';
import Regularpage from './regularpage.js';
import Firstpage from './firstpage.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {


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
      <div className="App">
        <Switch>
          <Route exact path='/' component={Firstpage}/>
          <Route path='/' component={Regularpage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
