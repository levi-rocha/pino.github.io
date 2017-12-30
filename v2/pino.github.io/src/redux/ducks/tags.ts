import { StoreState, Tag } from '../../types';
import Project from '../../types/Project';

export const TOGGLE_TAG = 'TOGGLE_TAG';
export type TOGGLE_TAG = typeof TOGGLE_TAG;
export const TOGGLE_SELECT_ALL_TAGS = 'TOGGLE_SELECT_ALL_TAGS';
export type TOGGLE_SELECT_ALL_TAGS = typeof TOGGLE_SELECT_ALL_TAGS;

export interface ToggleTag {
    type: TOGGLE_TAG;
    id: number;
}

export interface ToggleSelectAllTags {
    type: TOGGLE_SELECT_ALL_TAGS;
}

export type Action = ToggleTag | ToggleSelectAllTags;

export function toggleTag(id: number): ToggleTag {
    return {
        type: TOGGLE_TAG,
        id: id
    };
}

export function toggleSelectAllTags(): ToggleSelectAllTags {
    return {
        type: TOGGLE_SELECT_ALL_TAGS
    };
}

export default function reducer(state: StoreState, action: Action): StoreState {
    switch (action.type) {
        case TOGGLE_TAG: {
            const updatedTags = getUpdatedTagsAfterSingleToggle(state.tags, action.id);
            const updatedFilteredProjects = noTagsSelected(updatedTags) 
                ? state.projects
                : getUpdatedFilteredProjects(state.projects, updatedTags);
            const updatedAllTagsSelected = allTagsSelected(updatedTags) 
                ? true 
                : noTagsSelected(updatedTags) 
                    ? false
                    : state.allTagsSelected;
            return { 
                ...state, 
                filteredProjects: updatedFilteredProjects,
                tags: updatedTags,
                allTagsSelected: updatedAllTagsSelected
            };
        }
        case TOGGLE_SELECT_ALL_TAGS: {
            const allTagsAreSelected = !state.allTagsSelected;
            const updatedTags = state.tags.map(tag => { 
                return {
                    ...tag, isSelected: allTagsAreSelected
                };
            });
            const updatedFilteredProjects = allTagsAreSelected
                ? getUpdatedFilteredProjects(state.projects, updatedTags)
                : state.projects;
            return {
                ...state,
                filteredProjects: updatedFilteredProjects,
                tags: updatedTags,
                allTagsSelected: allTagsAreSelected
            };
        }
        default:
            return state;
    }
}

function getUpdatedTagsAfterSingleToggle(tags: Tag[], toggledTagId: number): Tag[] {
    return tags.map(tag => tag.id === toggledTagId
        ? {...tag, isSelected: !tag.isSelected }
        : tag );
}

function allTagsSelected(tags: Tag[]): boolean {
    return getSelectedTagCount(tags) === tags.length;
}

function noTagsSelected(tags: Tag[]): boolean {
    return getSelectedTagCount(tags) === 0;
}

function getSelectedTagCount(tags: Tag[]): number {
    return tags.filter(tag => tag.isSelected).length;
}

function getUpdatedFilteredProjects(projects: Project[], tags: Tag[]): Project[] {
    const selectedTags: Tag[] = tags.filter(tag => tag.isSelected);
    return projects.filter(project => projectHasAllTags(project, selectedTags));
}

function projectHasAllTags(project: Project, tags: Tag[]) {
    let hasAllTags: boolean = true;
    for (let tag of tags) {
        if (!projectHasTag(project, tag)) {
            hasAllTags = false;
            break;
        }
    }
    return hasAllTags;
}

function projectHasTag(project: Project, tag: Tag) {
    let hasTag: boolean = false;
    for (let projectTag of project.tags) {
        if (projectTag.name === tag.name) {
            hasTag = true;
        }
    }
    return hasTag;
}