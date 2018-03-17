import { Project } from "../types";

/* constant and types */

const OPEN_MODAL = "pino.github.io/tags/OPEN_MODAL";
type OPEN_MODAL = typeof OPEN_MODAL;
const CLOSE_MODAL = "pino.github.io/tags/CLOSE_MODAL";
type CLOSE_MODAL = typeof CLOSE_MODAL;
const OPEN_IMAGE = "pino.github.io/tags/OPEN_IMAGE";
type OPEN_IMAGE = typeof OPEN_IMAGE;
const CLOSE_IMAGE = "pino.github.io/tags/CLOSE_IMAGE";
type CLOSE_IMAGE = typeof CLOSE_IMAGE;

interface OpenModal {
	type: OPEN_MODAL;
	openProject: Project;
}
interface CloseModal {
	type: CLOSE_MODAL;
}
interface OpenImage {
	type: OPEN_IMAGE;
	image: string;
}
interface CloseImage {
	type: CLOSE_IMAGE;
}

export type Action = OpenModal | CloseModal | OpenImage | CloseImage;

export interface ModalState {
	modalIsOpen: boolean;
	openProject: Project | undefined;
	imageModalIsOpen: boolean;
	openImage: string;
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

export function openImage(image: string): OpenImage {
	return {
		type: OPEN_IMAGE,
		image: image
	};
}

export function closeImage(): CloseImage {
	return {
		type: CLOSE_IMAGE
	};
}

/* reducer */

const initialState: ModalState = {
	modalIsOpen: false,
	openProject: undefined,
	imageModalIsOpen: false,
	openImage: "placeholder.png"
};

export default function reducer(
	state: ModalState = initialState,
	action: Action
): ModalState {
	switch (action.type) {
		case OPEN_MODAL: {
			return {
				...state,
				modalIsOpen: true,
				openProject: action.openProject
			};
		}
		case CLOSE_MODAL: {
			return {
				...state,
				modalIsOpen: false
			};
		}
		case OPEN_IMAGE: {
			return {
				...state,
				imageModalIsOpen: true,
				openImage: action.image
			};
		}
		case CLOSE_IMAGE: {
			return {
				...state,
				imageModalIsOpen: false
			};
		}
		default:
			return state;
	}
}
