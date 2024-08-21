import { Monster } from '../../App';
import Card from '../card/card.component'

import './card-list.styles.css'

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => {
    console.log(' The Method for the CardList Component The props are ', monsters)
    return (
        <div className='card-list'>
             {monsters.map((monster) => {
                const {id} = monster;
                return <Card key={id} monster={monster}></Card>
             })}
        </div>
    )
}

export default CardList;