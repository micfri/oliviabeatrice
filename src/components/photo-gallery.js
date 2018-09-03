import React, { Component } from 'react';
import * as contentful from 'contentful'
import resources from '../resources.js';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';


class PhotoGallery extends Component {


  constructor() {
    super();
    this.state = {
      currentImage: 0,
      category: {},
      photoAssets: [],
      assetUrls: [],
      photos: []
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  client = contentful.createClient({
    space: resources.data.space,
    accessToken: resources.data.accessToken
  })

  componentWillMount(){
    this.setState({category: this.props.categoryID});
  }

  componentDidMount(){
    console.log('reached Photo Gallery');
    this.client.getEntries()
    .then(entries => {
      entries.items.forEach(entry => {

        if(entry.fields) {
          if(entry.sys.contentType.sys.id == 'photo') {
            if(entry.fields.category.sys.id == this.state.category){
              this.addPhotoObject(entry.sys.id);

            }

          }
        }
      })
    })

  }

  addPhotoObject(entryID) {
    var widthR = null;
    var heightR = null;
    var url = null;
    var caption = 'hello';

    this.client.getEntry(entryID)
      .then((entry) => {
        widthR = entry.fields.widthRatio;
        heightR = entry.fields.heightRatio;
        caption = entry.fields.caption;
        this.client.getAsset(entry.fields.photo.sys.id)
          .then((asset) => {
            url = asset.fields.file.url;
            this.setState(prevState => ({
              photos: [...prevState.photos, {src: url, width: widthR, height: heightR, caption: caption}]
            }))
          })
          .catch(console.error);
      })
      .catch(console.error)
  }


  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }




  render() {
      return (
        <div className="Gallery">

          <Gallery photos={this.state.photos} onClick={this.openLightbox} />
          <Lightbox images={this.state.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            backdropClosesModal={true}
          />
        </div>
      )
    }

}

export default PhotoGallery;
