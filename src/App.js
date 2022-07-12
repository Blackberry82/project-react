import React, {Component} from 'react';

import css from './App.module.css'

import Posts from './components/posts/Posts'
import Comments from "./components/comments/Comments";

class App extends Component {

  render() {
    return (
        <div className={css.container}>
          <div className={css.post}><Posts/></div>
          <div className={css.comment}><Comments/></div>

        </div>
    );
  }
}

export default App;
