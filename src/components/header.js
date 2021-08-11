import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';
import about from './about.js';
import photo from './photo.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import film from './film.js';
import brand from './brand.js'

class Header extends Component {


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
      <div className="Header">
        <div className="col-lg-12">
          <div className="row middle-xs">
            <div className="col-lg-3">
              <div className="headerLogo"><a href="/#/"><img className="logo" alt="ob-logo" src={this.state.logo_url}></img></a></div>
            </div>
            <div className="col-lg-6"> <p> </p></div>
            <div className="row col-lg-3 end-xs">
              <ul id="lg-100" className="headerMenu row end-xs show-md">
                <li className="headerMenuItem row start-xs">
                  <img alt='bock' class="bock" src={require('../img/Bock_korall.png')}/>
                  <a href="/#/photo/">Foto</a>
                </li>
                <li className="headerMenuItem row start-xs">
                  <img alt='bock' class="bock" src={require('../img/Bock_korall.png')}/>
                  <a href="/#/film/">Film</a>
                </li>
                <li className="headerMenuItem row start-xs">
                  <img alt='bock' class="bock" src={require('../img/Bock_korall.png')}/>
                  <a href="/#/brand/">Affärsutveckling</a>
                </li>
                <li className="headerMenuItem row start-xs">
                  <img alt='bock' class="bock" src={require('../img/Bock_korall.png')}/>
                  <a href="/#/about/">Om mig</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-lg-4"> </div>
              <div className="row col-lg-4 center-xs">
                <div className="pageTitle">
                  <Switch>
                    <Route path='/photo/' render={(props) => <Title {...props} page="Foto" />} />
                    <Route path='/film/' render={(props) => <Title {...props} page="Film" />}/>
                    <Route path='/brand/' render={(props) => <Title {...props} page="Affärsutveckling" />}/>
                    <Route path='/about/' render={(props) => <Title {...props} page="Om mig" />}/>

                  </Switch>
                </div>
              </div>
              <div className="col-lg-4"> </div>
            </div>
          </div>
        </div>

    );

  }

}

export default Header;

function Title(props) {
  return <h1 className="pageTitle">{props.page}</h1>
}
