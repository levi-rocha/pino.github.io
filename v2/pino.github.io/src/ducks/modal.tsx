import { Project } from '../types';

/* constant and types */

const OPEN_MODAL = 'pino.github.io/tags/OPEN_MODAL';
type OPEN_MODAL = typeof OPEN_MODAL;
const CLOSE_MODAL = 'pino.github.io/tags/CLOSE_MODAL';
type CLOSE_MODAL = typeof CLOSE_MODAL;

interface OpenModal {
    type: OPEN_MODAL;
    openProject: Project;
}
interface CloseModal {
    type: CLOSE_MODAL;
}

export type Action = OpenModal | CloseModal;

export interface ModalState {
    modalIsOpen: boolean;
    openProject: Project | undefined;
}

/* action creators */

export function openModal(openProject: Project): OpenModal {
    return {
        type: OPEN_MODAL,
        openProject: openProject
    };
}

export function closeModal(): CloseModal {
    return {
        type: CLOSE_MODAL
    };
}

/* reducer */

const initialState: ModalState = {
    modalIsOpen: false,
    openProject: undefined
};

export default function reducer(state: ModalState = initialState, action: Action): ModalState {
    switch (action.type) {
        case OPEN_MODAL: {
            return {...state, 
                modalIsOpen: true, openProject: action.openProject
            };
        }
        case CLOSE_MODAL: {
            return {...state,
                modalIsOpen: false
            };
        }
        default:
            return state;
    }
}