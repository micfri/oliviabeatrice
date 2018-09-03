import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as contentful from 'contentful';
import { BrowserRouter} from 'react-router-dom';
import { HashRouter }from 'react-router-dom';


  var client = contentful.createClient({
    space: '2potjglsqrdx',
    accessToken: 'cd2fbf03d3690b9b4adfeeeec4f47778c372155185703ed9ae2741d9aed4ad38'
  })

  client.getEntries()
  .then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
      }
    })
  })



ReactDOM.render(<HashRouter ><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
