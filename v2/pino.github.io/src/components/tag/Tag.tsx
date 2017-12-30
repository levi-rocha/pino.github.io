import * as React from 'react';
import Tag from '../../types/Tag';

export interface TagProps {
    tag: Tag;
    onToggle: () => {};
}

const Tag: React.SFC<TagProps> = (props) => (
    <React.Fragment>
        <label>
            <input 
                name={props.tag.name}
                type="checkbox"
                checked={props.tag.isSelected}
                onChange={props.onToggle}
            />
            {props.tag.name}
        </label>
    </React.Fragment>
);

export default Tag;