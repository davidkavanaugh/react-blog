import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPost from './BlogPost/BlogPost';
import LatestPosts from './LatestPosts/LatestPosts';
import './App.css';


// var closeX = document.getElementById("snipcart-close").getElementByTagName("a");
// var exit = document.createElement("div");
// exit.innerHTML = "<Button>EXIT</Button>";
// closeX.replaceChild(closeX, closeX);


class App extends Component {

  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Router>
          <Switch>
            <Route path="/" exact component={LatestPosts} />
            <Route path="/blogpost/:id" component={BlogPost} />
          </Switch>
          </Router>
        </main>
      </div >
    );
  }
}

export default App;
