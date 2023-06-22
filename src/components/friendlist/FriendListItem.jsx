import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import css from './friendlist.module.css';

// export const FriendListItem = ({ id, name, avatar, isOnline }) => (
//   <li className={css.item} key={id}>
//     <span className={clsx([css.status], { [css.online]: isOnline })} />
//     <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//     <p className={css.name}>{name}</p>
//   </li>
// );
import { ListItem } from './FriendLitItem.styled.js';

export const FriendListItem = ({ id, name, avatar, isOnline }) => (
  <ListItem isOnline={isOnline} key={id}>
    <span />
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
