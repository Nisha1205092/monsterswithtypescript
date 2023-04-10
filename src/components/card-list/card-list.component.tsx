import { Monster } from '../../App';
import { Card } from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
	monsters: Monster[];
}
export const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className='card-list'>
			{monsters.map(m => <Card key={m.id} monster={m}/>)}
		</div>
	)
}