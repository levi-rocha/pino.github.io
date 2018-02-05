import { StoreState, Action } from '../../types';
import { connect, Dispatch } from 'react-redux';
import * as modalActions from '../../ducks/modal';
import { ProjectDetailModal } from '../../components';

const mapStateToProps = (state: StoreState) => ({
  isOpen: state.modal.modalIsOpen,
  project: state.modal.openProject,
  imageIsOpen: state.modal.imageModalIsOpen,
  openImageSrc: state.modal.openImage
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  closeModal: () => dispatch(modalActions.closeModal()),
  openImage: (image: string) => dispatch(modalActions.openImage(image)),
  closeImage: () => dispatch(modalActions.closeImage())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailModal);