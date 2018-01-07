import { TagsState } from '../ducks/tags';
import { ModalState } from '../ducks/modal';

export default interface StoreState {
    tags: TagsState;
    modal: ModalState;
}