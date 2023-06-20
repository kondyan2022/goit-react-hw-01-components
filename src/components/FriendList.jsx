import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">{friends.map(FriendListItem)}</ul>
);

FriendList.propTypes = { friends: PropTypes.array };
