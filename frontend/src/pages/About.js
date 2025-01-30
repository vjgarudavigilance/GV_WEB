import React, { useEffect } from 'react';
import './About.css';
import aboutVideo from '../assets/about.mp4'; // Import the video file

const About = () => {
    useEffect(() => {
        const stats = document.querySelectorAll('.number');

        stats.forEach(stat => {
            const value = parseInt(stat.getAttribute('data-value'));
            let current = 0;
            const increment = value / 100;

            const interval = setInterval(() => {
                if (current < value) {
                    current += increment;
                    stat.textContent = Math.round(current) + '+';
                } else {
                    stat.textContent = value + '+';
                    clearInterval(interval);
                }
            }, 10);
        });

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const content = section.querySelector('.content');

            section.addEventListener('click', () => {
                const isOpen = section.classList.contains('open');
                section.classList.toggle('open', !isOpen);

                if (isOpen) {
                    content.classList.remove('show');
                    setTimeout(() => {
                        content.style.display = 'none';
                    }, 500);
                } else {
                    content.style.display = 'block';
                    setTimeout(() => {
                        content.classList.add('show');
                    }, 10);
                }
            });
        });
    }, []);

    return (
        <div className="about-us">
            {/* Background Video */}
            <video autoPlay loop muted className="video-background">
                <source src={aboutVideo} type="video/mp4" />
            </video>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                <div className="main-heading">The Nexus for Cybersecurity Innovators and Ethical Hacking Pioneers</div>
                <div className="tagline">Guardians of the Digital Frontier</div>

                <div className="stats-section">
                    <h2>Our Achievements</h2>
                    <div className="stats">
                        <div className="stat">
                            <div className="number" data-value="350">0</div>
                            <div className="label">Members</div>
                        </div>
                        <div className="stat">
                            <div className="number" data-value="20">0</div>
                            <div className="label">Events</div>
                        </div>
                        <div className="stat">
                            <div className="number" data-value="25">0</div>
                            <div className="label">Core Members</div>
                        </div>
                        <div className="stat">
                            <div className="number" data-value="50">0</div>
                            <div className="label">Alumni</div>
                        </div>
                    </div>
                </div>

                <div className="section" id="about-us">
                    <h2>
                        About Us
                        <span className="arrow">&#x25BC;</span>
                    </h2>
                    <p className="content">
                    VJ Garuda Vigilance is a dynamic and forward-thinking cybersecurity club, inspired by the vigilance and sharpness of the mythical eagle Garuda—a symbol of foresight, protection, and unwavering dedication. In today’s rapidly evolving digital landscape, these qualities are essential. Our club is committed to educating, equipping, and empowering students with the knowledge and skills required to tackle modern cyber threats and safeguard the digital world.

Our mission is to build a community of cybersecurity enthusiasts who are passionate about learning and applying their expertise in real-world scenarios. Through workshops, hands-on experiences, and events like Capture the Flag (CTF) challenges, ethical hacking workshops, and red teaming simulations, we provide members with opportunities to bridge the gap between theoretical knowledge and practical application.

At VJ Garuda Vigilance, we foster a culture of continuous learning and teamwork. Each member plays a critical role in the club's success, contributing to a proactive and innovative approach to cybersecurity. Our aim is to make a lasting impact in the field of cybersecurity by shaping future leaders who are job-ready and industry-savvy.

Together, we are more than just a club; we are a movement driving excellence and innovation in cybersecurity.
                    </p>
                </div>

                <div className="section" id="our-vision">
                    <h2>
                        Our Vision
                        <span className="arrow">&#x25BC;</span>
                    </h2>
                    <p className="content">
                    To establish VJ Garuda Vigilance as a leader among student-driven cybersecurity organizations by cultivating an environment that encourages learning, innovation, and a deep understanding of cybersecurity principles. We envision a future where our members become global cybersecurity experts and ethical guardians, actively contributing to a secure digital ecosystem for individuals, organizations, and governments worldwide.
                    </p>
                </div>

                <div className="section" id="mission">
                    <h2>
                        Mission
                        <span className="arrow">&#x25BC;</span>
                    </h2>
                    <p className="content">
                    We are committed to providing high-quality, accessible cybersecurity education to all students. Through structured workshops, hands-on training sessions, and technical presentations, we aim to cover all essential aspects of cybersecurity, from fundamental concepts to advanced techniques. Our mission is to empower students by giving them practical exposure to real-world challenges. Through CTFs (Capture the Flag competitions), ethical hacking challenges, and penetration testing labs, we ensure our members can apply theoretical knowledge to solve real-world cybersecurity problems. VJ Garuda Vigilance fosters a thriving community where members can engage with like-minded peers, share their knowledge, and learn collaboratively.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
