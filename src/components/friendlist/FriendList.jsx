import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './friendlist.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>{friends.map(FriendListItem)}</ul>
);

FriendList.propTypes = { friends: PropTypes.array };
