import Project from './Project';
import Tag from './Tag';

export default interface StoreState {
    projects: Project[];
    filteredProjects: Project[];
    tags: Tag[];
    allTagsSelected: boolean;
}