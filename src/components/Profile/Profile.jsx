import css from "./Profile.module.css"
import PropTypes from "prop-types"

export default function Profile({ username, tag, location, avatar, followers, likes, views }) {
	return (
		<div className={css.profile}>
			<div>
				<img src={avatar} alt={username} className={css.avatar} />
				<p className={css.name}>{username}</p>
				<p className={css.tag}>@ {tag}</p>
				<p>{location}</p>
			</div>
			<ul className={css.stats}>
				<li>
					<span className={css.label}>Followers: </span>
					<span> {followers}</span>
				</li>
				<li>
					<span className={css.label}>Views: </span>
					<span> {views}</span>
				</li>
				<li>
					<span className={css.label}>Likes: </span>
					<span> {likes}</span>
				</li>
			</ul>
		</div>
	)
}

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	followers: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
	location: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	views: PropTypes.number.isRequired,
}
