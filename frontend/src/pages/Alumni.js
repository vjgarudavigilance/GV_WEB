import './Alumni.css';

const foundersData = [
  {
    name: "Mr. Meharnadh - Cyber Security Student - Batch(2020-2024)",
    text: "Being a part of VJ Garuda Vigilance was an eye-opening experience. The club’s focus on cybersecurity research and development allowed me to dive into cutting-edge topics and contribute to innovative solutions. The opportunity to work on research projects and collaborate with industry experts was instrumental in my growth as a data security analyst. The club’s commitment to staying at the forefront of cybersecurity trends and technologies has had a lasting impact on my professional journey. I owe much of my current success to the foundation built during my time with the club.",
    imageAlt: "Mr. Meharnadh",
    imageSrc: "", // Blank for now
    alternate: true
  },
  {
    name: "Mr. Yathin - Cyber Security Student - Batch(2020-2024)",
    text: "My time at VJ Garuda Vigilance was transformative. The club provided me with hands-on experience and deep insights into the world of cybersecurity. The practical exercises, like penetration testing and incident response drills, were invaluable in shaping my career. I learned how to tackle real-world security challenges and stay ahead of emerging threats. The skills and knowledge I gained from the club have been crucial in my current role as a cybersecurity specialist. I am grateful for the rigorous training and the supportive community that helped me launch my career.",
    imageAlt: "Mr. Yathin",
    imageSrc: "", // Blank for now
    alternate: false
  },
  {
    name: "Mr. Shahriyar - Cyber Security Student - Batch(2020-2024)",
    text: "Being a part of VJ Garuda Vigilance was an eye-opening experience. The club’s focus on cybersecurity research and development allowed me to dive into cutting-edge topics and contribute to innovative solutions. The opportunity to work on research projects and collaborate with industry experts was instrumental in my growth as a data security analyst. The club’s commitment to staying at the forefront of cybersecurity trends and technologies has had a lasting impact on my professional journey. I owe much of my current success to the foundation built during my time with the club.",
    imageAlt: "Mr. Shahriyar",
    imageSrc: "", // Blank for now
    alternate: true
  },
  {
    name: "Mr. Samuel - Cyber Security Student - Batch(2020-2024)",
    text: "VJ Garuda Vigilance was more than just a club; it was a learning hub that fostered a deep passion for cybersecurity. The educational programs and awareness campaigns I participated in were pivotal in shaping my career path as a cybersecurity educator. The club’s emphasis on cybersecurity awareness and education inspired me to pursue a career in teaching and sharing knowledge with others. The experience I gained has been instrumental in my role, and I am proud to see the club’s continued growth and impact in the field.",
    imageAlt: "Mr. Samuel",
    imageSrc: "", // Blank for now
    alternate: false
  }
];

const previousBatchesData = [
  {
    year: "2020-2024",
    photoSrc: require('../assets/groupphoto.jpg'), // Ensure the path is correct and relative to your src folder
    altText: "Batch 2020-2024"
  }
  // Add more batches as needed
];

const Testimonial = ({ name, text, imageAlt, imageSrc, alternate }) => {
  return (
    <div className={`testimonial-content ${alternate ? 'alternate' : ''}`}>
      <div className="testimonial-image">
        <img src={imageSrc} alt={imageAlt} />
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
  return (
    <section className="testimonials-section">
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
