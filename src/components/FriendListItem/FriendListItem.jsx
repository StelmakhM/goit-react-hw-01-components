import css from "./FriendListItem.module.css"
import PropTypes from "prop-types"

export default function FriendsListItem({ friends }) {
	return (
		<>
			{friends.map(({ avatar, id, name, isOnline }) => {
				const backgroundColor = isOnline ? "green" : "red"
				return (
					<li key={id} className={css.item}>
						<span className={css.status} style={{ backgroundColor: backgroundColor }}></span>
						<img src={avatar} alt="User avatar" width="48" />
						<p className={css.name}>{name}</p>
					</li>
				)
			})}
		</>
	)
}

FriendsListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string,
			name: PropTypes.string,
			isOnline: PropTypes.bool,
			id: PropTypes.number,
		})
	),
}
