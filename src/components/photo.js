import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';
import photos from './photos.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App.js';
import PhotoGallery from './photo-gallery.js'


class Photo extends Component {


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


  }





  render() {
    return (
      <div className="Photo">
        <div className="col-lg-12">

          <div className="row col-lg-12">
            <div className="col-lg-12">
              <Switch>
                <Route exact path='/photo/' component={photos}/>
                <Route path='/photo/:id'  component={Category}/>
              </Switch>

            </div>

          </div>
        </div>
      </div>
    );

  }

}

export default Photo;



const Category = ({ match }) => (
    <div>
      <PhotoGallery categoryID={match.params.id}/>
    </div>
);
