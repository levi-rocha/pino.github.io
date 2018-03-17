import { StoreState, Project, Tag, Link } from "./types";
import { default as tagsReducer } from "./ducks/tags";
import { default as modalReducer } from "./ducks/modal";
import { createStore, combineReducers } from "redux";
import { Store } from "react-redux";

const reducer = combineReducers<StoreState>({
	tags: tagsReducer,
	modal: modalReducer
});

const configureStore = (): Store<StoreState> =>
	createStore<StoreState>(reducer, readInitialStateFromJson());

export default configureStore;

function readInitialStateFromJson() {
	const projectsData = require("./projects.json");
	const projects: Project[] = [];
	let lastId: number = 0;
	let tags: Tag[] = [];
	for (let projectData of projectsData) {
		let projectLinks: Link[] = [];
		for (let linkData of projectData.links) {
			projectLinks.push({
				id: lastId++,
				title: linkData.title,
				url: linkData.url
			});
		}
		let projectTags: Tag[] = [];
		for (let tagData of projectData.tags) {
			let existingTag: Tag | undefined = tags.find(
				tag => tag.name.toLowerCase() === tagData.toLowerCase()
			);
			if (!isTag(existingTag)) {
				let newTag: Tag = {
					id: lastId++,
					name: tagData,
					isSelected: false
				};
				projectTags.push(newTag);
				tags.push(newTag);
			} else {
				projectTags.push(existingTag);
			}
		}
		projectTags.sort((a, b) => a.name.localeCompare(b.name));
		projects.push({
			id: projectData.id,
			title: projectData.title,
			description: projectData.description,
			images: projectData.images,
			links: projectLinks,
			tags: projectTags
		});
	}
	tags.sort((a, b) => a.name.localeCompare(b.name));
	const initialState: StoreState = {
		tags: {
			projects: projects,
			tags: tags,
			allTagsSelected: false,
			filteredProjects: projects
		},
		modal: {
			modalIsOpen: false,
			openProject: undefined,
			imageModalIsOpen: false,
			openImage: "placeholder.png"
		}
	};
	return initialState;
}

function isTag(x: Tag | undefined): x is Tag {
	return <Tag> x !== undefined;
}
