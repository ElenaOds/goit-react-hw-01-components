import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export default function FriendList ({friends}) {
    return (
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
            <Status online={isOnline}>
            </Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
            </Item>
            ))}
        </List>
    )}


    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          }),
        ),
      };
      