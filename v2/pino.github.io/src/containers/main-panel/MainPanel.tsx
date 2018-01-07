import { connect, Dispatch } from 'react-redux';
import { StoreState, Action, Project } from '../../types';
import { MainPanel } from '../../components';
import * as modalActions from '../../ducks/modal';

const mapStateToProps = (state: StoreState) => ({
    projects: state.tags.filteredProjects
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    projectClick: (openProject: Project) => dispatch(modalActions.openModal(openProject))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);