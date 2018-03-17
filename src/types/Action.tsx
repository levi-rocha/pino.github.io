import { Action as TagAction } from "../ducks/tags";
import { Action as ModalAction } from "../ducks/modal";

export type Action = TagAction | ModalAction;
