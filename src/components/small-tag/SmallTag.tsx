import * as React from 'react';
import { Tag } from '../../types';
import './SmallTag.css';

export interface SmallTagProps {
    tag: Tag;
}

const SmallTag: React.SFC<SmallTagProps> = (props) => {

    let classes: string = props.tag.isSelected ? 'small-tag selected' : 'small-tag';

    return (
        <div className={classes}>{props.tag.name}</div>
    );
};

export default SmallTag;