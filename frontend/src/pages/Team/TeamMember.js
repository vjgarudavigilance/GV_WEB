import React from 'react';
import PropTypes from 'prop-types';
import './Team.css'; // Adjust path based on your project structure

const TeamMember = ({ member, onClick }) => {
    const { name, photo, designation } = member;

    return (
        <div className="team-member" onClick={onClick}>
            <div className="team-member-box">
                <img src={photo} alt={name} className="team-member-photo" />
                <div className="team-member-details">
                    <h3 className="team-member-name">{name}</h3>
                    <p className="team-member-designation">{designation}</p>
                </div>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired, // New prop for click event
};

export default TeamMember;
