// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import PythonShell from 'python-shell';

export default class Home extends Component {
  pressButton(){
    console.log('yay');
    PythonShell.run('test.py', function(){
      console.log('ya');
    })
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <button onClick={this.pressButton}>Woot</button>
        </div>
      </div>
    );
  }
}
