// import Project from './Project';
// import Tag from './Tag';
import { TagsState } from '../ducks/tags';
import { ModalState } from '../ducks/modal';

export default interface StoreState {
    tags: TagsState;
    modal: ModalState;
    // tags: {
    //     projects: Project[];
    //     filteredProjects: Project[];
    //     tags: Tag[];
    //     allTagsSelected: boolean;
    // };
    // modal: {
    //     modalIsOpen: boolean;
    //     openProject: Project | undefined;
    // };
}