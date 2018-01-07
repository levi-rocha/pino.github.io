import { StoreState, Action} from '../../types';
import { connect, Dispatch } from 'react-redux';
import * as modalActions from '../../ducks/modal';
import { ProjectDetailModal } from '../../components';

const mapStateToProps = (state: StoreState) => ({
  isOpen: state.modal.modalIsOpen,
  project: state.modal.openProject
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  closeModal: () => dispatch(modalActions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailModal);