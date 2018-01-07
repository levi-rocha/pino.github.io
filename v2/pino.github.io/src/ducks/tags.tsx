import { Tag } from '../types';
import Project from '../types/Project';

/* constants and types */

const TOGGLE_TAG = 'pino.github.io/tags/TOGGLE_TAG';
type TOGGLE_TAG = typeof TOGGLE_TAG;
const TOGGLE_SELECT_ALL_TAGS = 'pino.github.io/tags/TOGGLE_SELECT_ALL_TAGS';
type TOGGLE_SELECT_ALL_TAGS = typeof TOGGLE_SELECT_ALL_TAGS;

interface ToggleTag {
    type: TOGGLE_TAG;
    id: number;
    checked: boolean;
}
interface ToggleSelectAllTags {
    type: TOGGLE_SELECT_ALL_TAGS;
}

export type Action = ToggleTag | ToggleSelectAllTags;

export interface TagsState {
    projects: Project[];
    filteredProjects: Project[];
    tags: Tag[];
    allTagsSelected: boolean;
}

/* action creators */

export function toggleTag(id: number, checked: boolean): ToggleTag {
    return {
        type: TOGGLE_TAG,
        id: id,
        checked: checked
    };
}

export function toggleSelectAllTags(): ToggleSelectAllTags {
    return {
        type: TOGGLE_SELECT_ALL_TAGS
    };
}

/* reducer */

const initialState: TagsState = {
    projects: [],
    tags: [],
    allTagsSelected: false,
    filteredProjects: []
};

export default function reducer(state: TagsState = initialState, action: Action): TagsState {
    switch (action.type) {
        case TOGGLE_TAG: {
            const updatedTags = getUpdatedTagsAfterSingleToggle(state.tags, action.id, action.checked);
            const updatedProjects = getUpdatedProjects(state.projects, updatedTags);
            const updatedFilteredProjects = noTagsSelected(updatedTags) 
            ? updatedProjects
            : getFilteredProjects(updatedProjects);
            const updatedAllTagsSelected = allTagsSelected(updatedTags) 
            ? true 
            : noTagsSelected(updatedTags) 
            ? false
            : state.allTagsSelected;
            return { 
                projects: updatedProjects,
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
            const updatedProjects = state.projects.map(project => {
                return {...project, tags: project.tags.map(tag => {
                    return {
                        ...tag, isSelected: allTagsAreSelected
                    };
                })};
            });
            const updatedFilteredProjects = allTagsAreSelected
            ? getFilteredProjects(updatedProjects)
            : updatedProjects;
            return {
                projects: updatedProjects,
                filteredProjects: updatedFilteredProjects,
                tags: updatedTags,
                allTagsSelected: allTagsAreSelected
            };
        }
        default:
        return state;
    }
}

/* helper functions */

function getUpdatedTagsAfterSingleToggle(tags: Tag[], toggledTagId: number, checked: boolean): Tag[] {
    return tags.map(tag => tag.id === toggledTagId
        ? {...tag, isSelected: checked }
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
    
function getFilteredProjects(projects: Project[]): Project[] {
        return projects.filter(project => project.tags.filter(tag => tag.isSelected).length > 0);
    }
    
function getUpdatedProjects(projects: Project[], tags: Tag[]): Project[] {
        let selectedTags: number[] = [];
        for (let tag of tags) {
            if (tag.isSelected) {
                selectedTags.push(tag.id);
            }
        }
        return projects.map(project => updateProjectTags(project, selectedTags));
    }
    
function updateProjectTags(project: Project, selectedTagIds: number[]): Project {
        let updatedProjectTags = project.tags.map(tag => 
            selectedTagIds.indexOf(tag.id) < 0 
            ? {...tag, isSelected: false} 
            : {...tag, isSelected: true});
        return {...project, tags: updatedProjectTags};
        }