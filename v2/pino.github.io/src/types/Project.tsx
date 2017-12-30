import Link from './Link';
import Tag from './Tag';

export default interface Project {
    id: number;
    title: string;
    description: string;
    links: Link[];
    tags: Tag[];
}