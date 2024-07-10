import { Component } from 'react';

import './card-list.styles.css'

class CardList extends Component {
    render () {
        console.log(' The Method for the CardList Component The props are ', this.props)
        const { monsters } = this.props; // Deconstructed the prop to get the variables
        return <div className='card-list'>
             {monsters.map((monster) => {
                const {name, email, id} = monster;
                return <div className='card-container' key={id}>
                    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
             })}
        </div>
    }
}

export default CardList;