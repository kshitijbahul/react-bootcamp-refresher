import { Component } from 'react';

class CardList extends Component {
    render () {
        console.log(' The Method for the CardList Component The props are ', this.props)
        const { monsters } = this.props; // Deconstructed the prop to get the variables
        return <div>
             {monsters.map((monster) => {
                return <h1 key={monster.id}>{monster.name}</h1>
             })}
        </div>
    }
}

export default CardList;