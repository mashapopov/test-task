import { CardItem } from '../CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = ({ users, onClick }) => {
  return (
    <List>
      {users.map(user => (
        <CardItem key={user.id} {...user} onClick={onClick} />
      ))}
    </List>
  );
};
