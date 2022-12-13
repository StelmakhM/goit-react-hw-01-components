import css from "./FriendList.module.css"
import PropTypes from "prop-types"
import FriendsListItem from "../FriendListItem/FriendListItem"

export default function FriendsList({ friends }) {
	return (
		<ul className={css.friendList}>
			{friends.map(({ avatar, id, name, isOnline }) => (
				<FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
			))}
		</ul>
	)
}

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
}
