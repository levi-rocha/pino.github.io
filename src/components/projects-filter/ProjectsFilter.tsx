import * as React from 'react';
import './ProjectsFilter.css';
import Tag from '../../types/Tag';
import { TagList } from '../../components';
import { Tag as TagComponent } from '../../components';

export interface ProjectsFilterProps {
  allTagsSelected: boolean;
  tags: Tag[];
  onToggleTag: () => any;
  onToggleSelectAll: () => any;
}

const ProjectsFilter: React.SFC<ProjectsFilterProps> = (props) => {
  
  const selectAllTag: Tag = {
    id: -1,
    isSelected: props.allTagsSelected,
    name: 'Select all'
  };
  
  return (
    <div className="filter-card">
      <div> Filter projects: </div>
      <TagComponent 
        key={-1} 
        tag={selectAllTag} 
        onToggle={props.onToggleSelectAll}
      />
      <TagList
        tags={props.tags}
        onToggleTag={props.onToggleTag}
      />
    </div>
  );
};

export default ProjectsFilter;