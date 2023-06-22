import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

// import css from './friendlist.module.css';
// export const FriendList = ({ friends }) => (
//   <ul className={css['friend-list']}>{friends.map(FriendListItem)}</ul>
// );

import { UnmarkedList } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <UnmarkedList>{friends.map(FriendListItem)}</UnmarkedList>
);

FriendList.propTypes = { friends: PropTypes.array };
