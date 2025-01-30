import React, { useState } from 'react';
import TeamMember from './TeamMember'; // Adjust path based on your project structure
import teamMembers from './TeamData'; // Adjust path based on your project structure
import Modal from './Modal'; // Import the Modal component
import './Team.css'; // Import the CSS file for styling
import teamVideo from './team_bg.mp4'; // Import the background video

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null); // State to track the selected member
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Separate faculty coordinators and student coordinators
    const headOfDepartment = teamMembers.slice(0, 1); // Head of the department
    const facultyCoordinators = teamMembers.slice(2, 4); // Next three members
    const studentCoordinators = teamMembers.slice(4); // Remaining members

    const handleMemberClick = (member) => {
        setSelectedMember(member); // Set the selected member
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedMember(null); // Reset selected member
    };

    return (
        <div className="team-page">
            <div className="team-container">
                <video autoPlay muted loop className="team-bg-video">
                    <source src={teamVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className="team-title">Our Team</h1>

                {/* Row for Head of Department */}
                <div className="head-of-department">
                    {headOfDepartment.map(member => (
                        <TeamMember key={member.id} member={member} onClick={() => handleMemberClick(member)} />
                    ))}
                </div>

                {/* Row for Faculty Coordinators */}
                <div className="faculty-coordinators">
                    <h2 className="section-title">Faculty Coordinators</h2>
                    <div className="team-members">
                        {facultyCoordinators.map(member => (
                            <TeamMember key={member.id} member={member} onClick={() => handleMemberClick(member)} />
                        ))}
                    </div>
                </div>

                {/* Row for Student Coordinators */}
                <div className="student-coordinators">
                    <h2 className="section-title">Student Coordinators</h2>
                    <div className="team-members">
                        {studentCoordinators.map(member => (
                            <TeamMember key={member.id} member={member} onClick={() => handleMemberClick(member)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Render Modal if it is open */}
            {isModalOpen && selectedMember && (
                <Modal member={selectedMember} onClose={closeModal} />
            )}
        </div>
    );
};

export default Team;
