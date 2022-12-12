import user from "./components/Profile/user.json"
import data from "./components/Statistics/data.json"
import friends from "./components/FriendList/friends.json"
import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistics/Statistics"
import FriendsList from "./components/FriendList/FriendList"
import FriendsListItem from "./components/FriendListItem/FriendListItem"

const {
	username,
	tag,
	location,
	avatar,
	stats: { likes, followers, views },
} = user

export default function App() {
	return (
		<>
			<Profile username={username} tag={tag} location={location} avatarPath={avatar} followers={followers} likes={likes} views={views} />
			<Statistics title="Upload stats" stats={data} />
			<FriendsList>
				<FriendsListItem friends={friends} />
			</FriendsList>
		</>
	)
}
