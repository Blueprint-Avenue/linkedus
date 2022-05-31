import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Feed from "./components/Feed/Feed";

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* App Body */}
			{/* Sidebar */}
			<div className="app__body">
				<Sidebar />
				{/* Feed */}
				<Feed />
				{/* Widgets */}
			</div>
		</div>
	);
}

export default App;
