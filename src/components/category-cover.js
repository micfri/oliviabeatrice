import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';



class CategoryCover extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      album_title: [],
      album_date: {},
      album_pitctures: [],
      picture_url: {},
      asset_id: {}


    };
  }

  client = contentful.createClient({
    space: resources.data.space,
    accessToken: resources.data.accessToken
  })




  componentDidMount(){

    this.client.getEntry(this.props.id)
      .then((entry) => {
        this.setState({asset_id: entry.fields.categoryPicture.sys.id, album_title: entry.fields.categoryName});
        this.client.getAsset(this.state.asset_id)
          .then((asset) => {
            this.setState({picture_url: asset.fields.file.url});
            console.log(this.state.picture_url);
          })
          .catch(console.error);
      })
      .catch(console.error)




  }



  render() {

    return (
      <div className="CategoryCover col-xs-12 middle-xs">
        <div className="categoryShadow">

          <h3>{this.state.album_title}</h3>
          <img className="categoryPicture" alt="category" src={this.state.picture_url}></img>
        </div>

      </div>
        );

  }

}

export default CategoryCover;
