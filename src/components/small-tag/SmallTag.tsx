import * as React from 'react';
import { Tag } from '../../types';
import './SmallTag.css';

export interface SmallTagProps {
    tag: Tag;
    onToggle?: (id: number) => void;
}

const SmallTag: React.SFC<SmallTagProps> = (props) => {

    let classes: string = props.tag.isSelected ? 'small-tag selected' : 'small-tag';

    return (
        <div
            className={classes}
            onClick={
                (event) => { 
                    if (props.onToggle) { 
                        props.onToggle(props.tag.id);
                    } 
                }
            }
        >
            {props.tag.name}
        </div>
    );
};

export default SmallTag;