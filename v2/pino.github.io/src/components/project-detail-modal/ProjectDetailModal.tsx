import * as React from 'react';
import { Project } from '../../types';
import { ProjectDetail } from '../../components';
import './ProjectDetailModal.css';

const Modal = require('react-modal');

export interface ProjectDetailModalProps {
    isOpen: boolean;
    imageIsOpen: boolean;
    project: Project;
    openImageSrc: string;
    closeModal: () => any;
    openImage: () => any;
    closeImage: () => any;
}

const ProjectDetailModal: React.SFC<ProjectDetailModalProps> = (props) => (
    <div>
        <Modal
            id="projectDetail"
            contentLabel="project detail"
            isOpen={props.isOpen}
            onRequestClose={() => props.closeModal()}
        >
            <ProjectDetail {...props}/>
            <button className="close-button" onClick={(event) => props.closeModal()}>Close</button>
        </Modal>
    </div>
);

export default ProjectDetailModal;