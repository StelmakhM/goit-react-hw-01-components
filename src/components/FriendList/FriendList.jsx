import css from "./FriendList.module.css"
import PropTypes from "prop-types"

export default function FriendsList({ children }) {
	return <ul className={css.friendList}>{children}</ul>
}

FriendsList.propTypes = {
	children: PropTypes.element,
}
