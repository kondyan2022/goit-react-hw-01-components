import PropTypes from 'prop-types';

export const FriendListItem = ({ id, name, avatar, isOnline }) => (
  <li className="item" key={id}>
    <span className={isOnline ? 'status online' : 'status'}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
