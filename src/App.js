import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Feed from "./components/Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, logout, login} from "./features/userSlice";
import Login from "./components/Auth/Login";
import {useEffect} from "react";
import {auth} from "./firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// User Logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				// User Logged Out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			{/* Header */}
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					{/* Feed */}
					<Feed />
					{/* Widgets */}
				</div>
			)}
		</div>
	);
}

export default App;
