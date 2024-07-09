import { Component } from 'react';
import  CardList from './components/card-list/card-list.component';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Called anytime the componnet is created
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchString: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(()=> {
        // return the state object
        return {monsters: users}
      },() => {
        console.log(this.state.monsters)
      }))
      console.log('componentDidMount')
  }
    

  // Component is a function that returns an JSX element(JS extende code) 
  //The render method already exists on the Component class, 
  // We change what we pass to the function to render
  changeName() {
    this.setState({})
  }
  onSearchChange = (event) => {
      const searchString = event.target.value.toLowerCase()
      this.setState(()=>{
        return { searchString }
      },()=> {})
  }
  render() {
    console.log('render')

    const filteredMosters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    })

    return (
      <div className="App">
        <input className='search-box' type ='search' placeholder='Seach here' onChange={ this.onSearchChange}/>
        {
          filteredMosters.map((monster) => {
          return <div key = {monster.id}>
            <CardList></CardList>
          </div>
        })
        }
      </div>
    );
  }
}
export default App;
