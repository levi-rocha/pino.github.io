import * as React from "react";
import { Tag } from "../../types";
import { SmallTag } from "../../components";
import "./SmallTagList.css";

export interface SmallTagListProps {
	tags: Tag[];
	onToggleTag?: () => void;
}

const SmallTagList: React.SFC<SmallTagListProps> = props => (
	<div className="small-tag-list">
		{props.tags.map(tag => (
			<SmallTag key={tag.id} tag={tag} onToggle={props.onToggleTag} />
		))}
	</div>
);

export default SmallTagList;
