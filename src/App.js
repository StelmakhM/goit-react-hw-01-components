import user from "./data/user.json"
import data from "./data/data.json"
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"
import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistics/Statistics"
import FriendsList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

export default function App() {
	return (
		<>
			<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} likes={user.stats.likes} views={user.stats.views} />
			<Statistics title="Upload stats" stats={data} />
			<FriendsList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	)
}
