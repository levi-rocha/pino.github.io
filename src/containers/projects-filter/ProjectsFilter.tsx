import { ProjectsFilter } from "../../components";
import { StoreState, Action } from "../../types";
import { connect, Dispatch } from "react-redux";
import * as tagActions from "../../ducks/tags";

const mapStateToProps = (state: StoreState) => ({
	tags: state.tags.tags,
	allTagsSelected: state.tags.allTagsSelected
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onToggleTag: (id: number) => dispatch(tagActions.toggleTag(id)),
	onToggleSelectAll: () => dispatch(tagActions.toggleSelectAllTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsFilter);
