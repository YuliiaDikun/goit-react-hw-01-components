import PropTypes from "prop-types";
import css from './Friends.module.css';
export const FriendsList = ({ friends }) => (
    <section className={css.friends}>
        <ul className={css.friendList}>
      {friends.map(friend => (
          <li key={friend.id} className={css.item}>
              <span className={friend.isOnline ? css.online : css.offline}>{friend.isOnline}</span>
              <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
              <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </section>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  })),
  
};