import React, { Component } from 'react';
import * as contentful from 'contentful';
import resources from '../resources.js';
import CategoryCover from './category-cover.js';


class Photos extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      categories: [],
      page_title: [],
      page_text: []
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
          if(entry.sys.contentType.sys.id == 'photoPortfolioCategory') {
            this.setState(prevState => ({
              categories: [...prevState.categories, entry.sys.id]
            }));
          }
        }

      })
    })

    this.client.getAsset('2vXfm8Ik3iWwms24asKoiy')
      .then((asset) => {
        console.log(asset);
        this.setState({logo_url: asset.fields.file.url});
        console.log(this.state.logo_url);
      })
      .catch(console.error)

    this.client.getEntry('h5udgnnGLuiMU2CQ8kquw')
      .then((entry) => {
        this.setState({page_title: entry.fields.pageTitle,
        page_text: entry.fields.pageText});
      })
      .catch(console.error)

  }


  render() {

    const categories = this.state.categories;
    const categoryList = categories.map((category) =>
      <li className="center-xs col-lg-4" key={category.toString()}>
        <a href={"/#/photo/" + category + "/"}>
          <CategoryCover id={category}> </CategoryCover>
        </a>
      </li>

    );

    return (
      <div className="Photos">
        <div className="row center-xs">
          <p>{this.state.page_text}</p>
        </div>

        <ul className="photoCategories center-xs">{categoryList}</ul>
      </div>

    );

  }

}

export default Photos;
