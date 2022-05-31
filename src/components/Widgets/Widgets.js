import {FiberManualRecord, Info} from "@material-ui/icons";
import React from "react";
import "./widgets.css";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecord />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedUs News</h2>
				<Info />
			</div>
			{newsArticle("Mac React is back", "Top news - 9099 readers")}
			{newsArticle("Timberwolves", "Top news - Building a New Dynasty")}
			{newsArticle("Cryptocurrency", "Top news - Will Shiba or Saitama hit #1")}
			{newsArticle(
				"Home Renovation",
				"Top news - New tax breaks for home rejuvenation"
			)}
			{newsArticle("Mac React launches new Business", "Top news - 432 Clients")}
		</div>
	);
}

export default Widgets;
