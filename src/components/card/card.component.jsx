
import './card.styles.css'

//const Card = (props) => {
//Destructure the props in place
const Card = ({ name, info, id}) => {
    return (
    <div className='card-container' key={id}>
        <img key={id} alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
    )
}

export default Card;