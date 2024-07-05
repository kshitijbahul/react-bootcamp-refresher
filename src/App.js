import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Called anytime the componnet is created
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 1
        },
        {
          name: 'Dracula',
          id: 2
        },
        {
          name: 'Zombie',
          id: 3
        },
        {
          name: 'Mummy',
          id: 4
        }
      ]
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
        {
          this.state.monsters.map((monster) => {
          return <div key = {monster.id}>
            <h1 >{monster.name}</h1>
          </div>
        })
        }
      </div>
    );
  }
}
export default App;
