import React, {useEffect, useState} from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import {
	CalendarViewDay,
	EventNote,
	Image,
	Subscriptions,
} from "@material-ui/icons";
import Post from "./Post";
import {db} from "../../firebase";
import firebase from "firebase";

function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Real Time listener to firebase
		// Pushes a message in and directly mapped to posts
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		// Push into the db
		db.collection("posts").add({
			name: "Samiya McIntosh",
			description: "This is a test",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				{/* Input */}
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption title="Photo" Icon={Image} color="#70B5F9" />
					<InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
					<InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
					<InputOption
						title="Write article"
						Icon={CalendarViewDay}
						color="#7FC15E"
					/>
				</div>
			</div>
			{/* Posts */}
			{posts.map(({id, data: {name, description, message, photoUrl}}) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</div>
	);
}

export default Feed;
