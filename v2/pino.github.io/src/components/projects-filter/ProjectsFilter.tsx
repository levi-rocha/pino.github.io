import * as React from 'react';
import './ProjectsFilter.css';
import Tag from '../../types/Tag';
import { TagList } from '../../components';

export interface ProjectsFilterProps {
  tags: Tag[];
  onToggleTag: () => {};
  onToggleSelectAll: () => {};
}

const ProjectsFilter: React.SFC<ProjectsFilterProps> = (props) => (
    <div className="filter-card">
      Filter projects by tag
      <TagList
        tags={props.tags}
        onToggleTag={props.onToggleTag}
      />
    </div>
);

export default ProjectsFilter;