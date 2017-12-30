import * as React from 'react';
import Tag from '../../types/Tag';
import { Tag as TagComponent } from '../../components';

export interface TagListProps {
    tags: Tag[];
    onToggleTag: () => {};
}

const TagList: React.SFC<TagListProps> = (props) => (
    <React.Fragment>
        {props.tags.map(tag => 
            <TagComponent 
                key={tag.id} 
                tag={tag}
                onToggle={props.onToggleTag}
            />
        )}
    </React.Fragment>
);

export default TagList;