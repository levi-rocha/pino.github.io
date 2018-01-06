import * as React from 'react';
import Tag from '../../types/Tag';
import { Tag as TagComponent } from '../../components';

export interface TagListProps {
    tags: Tag[];
    onToggleTag: () => void;
}

const TagList: React.SFC<TagListProps> = (props) => (
    <div className="tag-list">
        {props.tags.map(tag => 
            <TagComponent 
                key={tag.id} 
                tag={tag}
                onToggle={props.onToggleTag}
            />
        )}
    </div>
);

export default TagList;