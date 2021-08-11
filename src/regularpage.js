import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexboxgrid from './flexboxgrid.js';
import * as contentful from 'contentful';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from 'react-burger-menu'


class Regularpage extends Component {

  showSettings (event) {
   event.preventDefault();

  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      logo_url: null,
      menuOpen: false
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

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <Fade delay={1000}>
        <div className="Regularpage">
          <div className="container fullheight">
            <div className="row fullheight center-xs col-lg-12">
              <div id="lg-0">

                <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} right noOverlay >
                  <a onClick={() => this.closeMenu()} id="Foto" className="menu-item" href="/#/photo/">Foto</a>
                  <a onClick={() => this.closeMenu()} id="Film" className="menu-item" href="/#/film/">Film</a>
                  <a onClick={() => this.closeMenu()} id="Affärsutveckling" className="menu-item" href="/#/brand/">Affärsutveckling</a>
                  <a onClick={() => this.closeMenu()} id="Om-mig" className="menu-item" href="/#/about/">Om mig</a>
                </Menu>

              </div>
                <Header> </Header>
                <Main> </Main>
                <Footer> </Footer>
            </div>
          </div>
        </div>
      </Fade>

    );
  }
}

export default Regularpage;
