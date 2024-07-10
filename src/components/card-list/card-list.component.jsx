import { Component } from 'react';

import Card from '../card/card.component'

import './card-list.styles.css'

class CardList extends Component {
    render () {
        console.log(' The Method for the CardList Component The props are ', this.props)
        const { monsters } = this.props; // Deconstructed the prop to get the variables
        return <div className='card-list'>
             {monsters.map((monster) => {
                const {name, email, id} = monster;
                return <Card id={id} name={name} info={email}></Card>
             })}
        </div>
    }
}

export default CardList;