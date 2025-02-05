import React, { useEffect } from "react";
import "./Alumni.css";
import im from './profile.jpg';
import i1 from './1.jpg';
import i2 from './2.png';
import i3 from './3.jpg';
import i4 from "./4.jpg"
import ab from './2024.jpg';
import g25 from './2025.jpg';
import g26 from './2026.jpg';
import g27 from './2027.jpg';
import alumniVideo from './alumni.mp4'; // Import video for background

const foundersData = [
  {
    name: "Mr. Mehernadh - Cyber Security Student - Batch(2020-2024)",
    text: "Being involved with VJ Garuda Vigilance was a pivotal chapter in my career journey. The club's dedication to exploring the latest advancements in cybersecurity gave me the platform to learn, experiment, and grow in the field. Engaging in hands-on research and collaborating with professionals helped me develop a deeper understanding of data protection techniques and threat mitigation strategies. The experience not only enhanced my technical expertise but also instilled in me the importance of continuous learning in the fast-evolving cybersecurity landscape. The skills and knowledge I gained from my time with the club continue to guide my work today.",
    imageAlt: "Mr. Mehernadh",
    imageSrc: i1,
    alternate: true
  },
  {
    name: "Mr. Yathin - Cyber Security Student - Batch(2020-2024)",
    text: "My time at VJ Garuda Vigilance was transformative. The club provided me with hands-on experience and deep insights into the world of cybersecurity. The practical exercises, like penetration testing and incident response drills, were invaluable in shaping my career. I learned how to tackle real-world security challenges and stay ahead of emerging threats. The skills and knowledge I gained from the club have been crucial in my current role as a cybersecurity specialist. I am grateful for the rigorous training and the supportive community that helped me launch my career.",
    imageAlt: "Mr. Yathin",
    imageSrc: i2,
    alternate: false
  },
  {
    name: "Mr. Shahriyar - Cyber Security Student - Batch(2020-2024)",
    text: "Being a part of VJ Garuda Vigilance was an eye-opening experience. The club’s focus on cybersecurity research and development allowed me to dive into cutting-edge topics and contribute to innovative solutions. The opportunity to work on research projects and collaborate with industry experts was instrumental in my growth as a data security analyst. The club’s commitment to staying at the forefront of cybersecurity trends and technologies has had a lasting impact on my professional journey. I owe much of my current success to the foundation built during my time with the club.",
    imageAlt: "Mr. Shahriyar",
    imageSrc: i3,
    alternate: true
  },
  {
    name: "Mr. Samuel - Cyber Security Student - Batch(2020-2024)",
    text: "VJ Garuda Vigilance was more than just a club; it was a learning hub that fostered a deep passion for cybersecurity. The educational programs and awareness campaigns I participated in were pivotal in shaping my career path as a cybersecurity educator. The club’s emphasis on cybersecurity awareness and education inspired me to pursue a career in teaching and sharing knowledge with others. The experience I gained has been instrumental in my role, and I am proud to see the club’s continued growth and impact in the field",
    imageAlt: "Mr. Samuel",
    imageSrc: i4,
    alternate: false
  }
];

const previousBatchesData = [
  {
    year: "2020-2024",
    photoSrc: ab,
    altText: "Batch 2020-2024"
  },
  {
    year: "2021-2025",
    photoSrc: g25,
    altText: "Batch 2024-2025"
  },
  {
    year: "2022-2026",
    photoSrc: g26,
    altText: "Batch 2025-2026"
  },
  {
    year: "2023-2027",
    photoSrc: g27,
    altText: "Batch 2025-2026"
  }
];

const Testimonial = ({ name, text, imageAlt, imageSrc, alternate }) => {
  return (
    <div className={`testimonial-content ${alternate ? 'alternate' : ''}`}>
      <div className="testimonial-image">
        <img className="testimonial-image" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="testimonial-text">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const BatchPhoto = ({ year, photoSrc, altText }) => {
  return (
    <div className="batch-photo">
      <h3>{year}</h3>
      <img src={photoSrc} alt={altText} />
    </div>
  );
};

const TestimonialsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonials = document.querySelectorAll(".testimonial-content");
    testimonials.forEach((testimonial) => {
      testimonial.classList.add("hidden");
      observer.observe(testimonial);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={alumniVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="subheading">Founders of the Club</h2>

      <div className="testimonial-container">
        {foundersData.map((founder, index) => (
          <Testimonial key={index} {...founder} />
        ))}
      </div>

      <h2 className="subheading">Previous Batches</h2>

      <div className="batch-container">
        {previousBatchesData.map((batch, index) => (
          <BatchPhoto key={index} {...batch} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
