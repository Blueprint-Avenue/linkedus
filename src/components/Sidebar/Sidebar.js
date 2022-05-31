import {Avatar} from "@material-ui/core";
import React from "react";
import "./sidebar.css";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			{/* Sidebar Top */}
			<div className="sidebar__top">
				<img
					src="https://img.rasset.ie/0015d72f-800.jpg"
					alt="background image"
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Samiya McIntosh</h2>
				<h4>samiyamcintosh@gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,644</p>
				</div>
			</div>
			{/* Sidebar Bottom */}
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
				{recentItem("mern")}
			</div>
		</div>
	);
}

export default Sidebar;
