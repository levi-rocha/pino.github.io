import * as React from 'react';
import { Project } from '../../types';
import { ProjectDetail } from '../../components';
import './ProjectDetailModal.css';

const Modal = require('react-modal');

export interface ProjectDetailModalProps {
    isOpen: boolean;
    project: Project;
    closeModal: () => any;
}

const ProjectDetailModal: React.SFC<ProjectDetailModalProps> = (props) => (
    <div>
        <Modal
            id="test"
            contentLabel="test"
            isOpen={props.isOpen}
            onRequestClose={() => props.closeModal()}
        >
            <ProjectDetail project={props.project}/>
            <button className="close-button" onClick={(event) => props.closeModal()}>Close</button>
        </Modal>
    </div>
);

export default ProjectDetailModal;