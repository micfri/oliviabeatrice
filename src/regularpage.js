import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexboxgrid from './flexboxgrid.js';
import * as contentful from 'contentful';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

class Regularpage extends Component {


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
      <div className="Regularpage">
        <div className="container fullheight">
          <div className="row fullheight center-xs col-lg-12">
            <Header> </Header>
            <Main> </Main>
            <Footer> </Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Regularpage;
