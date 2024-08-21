
import './card.styles.css'
import { Monster } from '../../App';
//const Card = (props) => {
//Destructure the props in place
type CardProps = {
    monster: Monster
}

const Card = ({ monster}: CardProps) => {
    const {name, email, id} = monster;
    return (
    <div className='card-container' key={id}>
        <img key={id} alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
}

export default Card;