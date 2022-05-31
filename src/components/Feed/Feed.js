import React from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import {
	CalendarViewDay,
	EventNote,
	Image,
	Subscriptions,
} from "@material-ui/icons";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				{/* Input */}
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button type="submit">Send</button>
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
		</div>
	);
}

export default Feed;
