import css from "./FriendListItem.module.css"
import PropTypes from "prop-types"

export default function FriendsListItem({ friends }) {
	return (
		<>
			{friends.map((friend) => {
				const backgroundColor = friend.isOnline ? "green" : "red"
				return (
					<li key={friend.id} className={css.item}>
						<span className={css.status} style={{ backgroundColor: backgroundColor }}></span>
						<img src={friend.avatar} alt="User avatar" width="48" />
						<p className={css.name}>{friend.name}</p>
					</li>
				)
			})}
		</>
	)
}
