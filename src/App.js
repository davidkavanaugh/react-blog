import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPost from './BlogPost/BlogPost';
import RecentPosts from './RecentPosts/RecentPosts';
import OlderPosts from './OlderPosts/OlderPosts';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Router>
          <Switch>
            <Route path="/" exact component={RecentPosts} />
            <Route path="/blogpost/:id" component={BlogPost} />
            <Route path="/older-posts" component={OlderPosts} />
          </Switch>
          </Router>
        </main>
      </div >
    );
  }
}

export default App;
