import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Called anytime the componnet is created
  constructor(){
    super();
    this.state = {
      name: 'Rahul',
      company: 'Google'
    }
  }

  // Component is a function that returns an JSX element(JS extende code) 
  //The render method already exists on the Component class, 
  // We change what we pass to the function to render
  changeName() {
    this.setState({})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>My Name is {this.state.name} and I work at {this.state.company}</h2>
          <button onClick={() => {
            //Takes 2 fuctions, 
            // 1st function is the runction which returns the state to be updated and provides 2 arguments, state(i.e current state before update) and props
            // 2nd function is a callback function which is called after the state is updated. it is optional
            this.setState((state, props) => {
              return {
                name: 'John'
              }
            },() => {
              console.log(this.state)
            })// 
            
          } }>Change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
