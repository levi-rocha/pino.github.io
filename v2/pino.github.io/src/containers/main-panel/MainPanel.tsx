import { connect } from 'react-redux';
import { StoreState } from '../../types';
import { MainPanel } from '../../components';

const mapStateToProps = (state: StoreState) => ({
    projects: state.filteredProjects
});

export default connect(mapStateToProps)(MainPanel);