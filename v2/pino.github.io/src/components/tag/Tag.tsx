import * as React from 'react';
import Tag from '../../types/Tag';
import './Tag.css';

export interface TagProps {
    tag: Tag;
    onToggle: (id: number, checked: boolean) => void;
}

const Tag: React.SFC<TagProps> = (props) => (
    <div className="filter-tag">
        <label className="switch">
            <input 
                name={props.tag.name}
                type="checkbox"
                checked={props.tag.isSelected}
                onChange={(event) => props.onToggle(props.tag.id, event.target.checked)}
            />
            <span className="slider"/>
            <div className="tag-name"> {props.tag.name} </div>
        </label>
    </div>
);

export default Tag;