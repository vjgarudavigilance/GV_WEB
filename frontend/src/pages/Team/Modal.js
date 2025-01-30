import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; // Ensure you have the necessary styles

const Modal = ({ member, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{member.name}</h2>
                <img src={member.photo} alt={member.name} className="modal-photo" />
                <p><strong>Position:</strong> {member.designation}</p>
                <p className="about-section">
                    <strong></strong> {member.about} {/* This will hold the 100-word description */}
                </p>
                <button 
                    className="linkedin-button" 
                    onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}>
                    LinkedIn
                </button> {/* Redirects to LinkedIn link */}
            </div>
        </div>
    );
};

Modal.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired, // Ensures LinkedIn is included
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
