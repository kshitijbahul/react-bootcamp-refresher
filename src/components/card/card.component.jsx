import { Component } from "react";

import './card.styles.css'

class Card extends Component {
    render() {
        const {name, info, id} = this.props;
        return <div className='card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
    }
}

export default Card;