import Card from '../card/card.component'

import './card-list.styles.css'

const CardList = (props) => {
    console.log(' The Method for the CardList Component The props are ', props)
    const { monsters } = props; // Deconstructed the prop to get the variables
    return (
        <div className='card-list'>
             {monsters.map((monster) => {
                const {name, email, id} = monster;
                return <Card key={id} id={id} name={name} info={email}></Card>
             })}
        </div>
    )
}

export default CardList;