import { ProjectsFilter } from '../../components';
import { StoreState } from '../../types';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState) => ({
    tags: state.tags,
});

export const ProjectsFilterContainer = connect(mapStateToProps, {
    onToggleTag: actions.toggleTag,
})(ProjectsFilter);