import React, { useEffect } from "react";
import "./Achievements.css";
import image1 from "./ins1.png";
import image2 from "./ins2.png";
import achievementVideo from "./achiebg.mp4"; // Import video
import pdf1 from "./cy1.pdf"; // Import PDF 1
import pdf2 from "./cy2.pdf"; // Import PDF 2

const achievementsData = [
  {
    title: "Cyber Insights Volume -1",
    text: "The inaugural edition of Cyber Insights (Jan - June 2023) marks the beginning of a dedicated cybersecurity newsletter at VNR VJIET. It showcases key events, student achievements, faculty contributions, and industry insights in cybersecurity. This issue covers workshops, guest lectures, CTF competitions, and major cyber trends, providing a platform to highlight the department's advancements and student innovations.",
    editors: ["Dr. M. Raja Sekar", "Dr. V.Prashanthi", "Dr.T.Preethi", "Raghavendra Sai","Harsha vardhan","Harshitha","Hemalatha","Yeshaswini"],
    buttonText: "Download",
    image: image1,
    alt: "Cyber Insight 1",
    pdf: pdf1, // Use PDF 1
  },
  {
    title: "Cyber Insights Volume -2",
    text: "The second edition of Cyber Insights (July - Dec 2023) builds upon the success of the first volume, expanding its focus on industry interactions, research publications, and hands-on learning experiences. This issue highlights collaborations with cybersecurity firms, advanced technical workshops, guest lectures, and student-led initiatives. It continues to serve as a valuable resource for students, faculty, and cybersecurity professionals.",
    editors: ["Dr. M. Raja Sekar", "Dr. V.Prashanthi", "Dr.T.Preethi", "Raghavendra Sai","Chandra Shekar","Sai Sharan","Hemanth","Praneeth"],
    buttonText: "Download",
    image: image2,
    alt: "Cyber Insight 2",
    pdf: pdf2, // Use PDF 2
  },
];

const Achievements = () => {
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

    const achievements = document.querySelectorAll(".achievement");
    achievements.forEach((achievement) => {
      achievement.classList.add("hidden");
      observer.observe(achievement);
    });

    return () => observer.disconnect();
  }, []);

  // Function to handle PDF download
  const handleDownloadPdf = (pdfUrl, fileName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "document.pdf"; // Default filename if not provided
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={achievementVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Title and Paragraph */}
      <div className="cyber-insights">
        <h1>Cyber Insights</h1>
        <p>
        Cyber Insights Magazine, by VJ Garuda Vigilance Club, covers the latest in cybersecurity—trends, research, ethical hacking, digital forensics, and cyber threats.
        </p>
      </div>

      {/* Achievements Section */}
      {achievementsData.map((achievement, index) => (
        <div
          className={`achievement ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="image">
            <img src={achievement.image} alt={achievement.alt} />
          </div>
          <div className="text">
            <h3>{achievement.title}</h3>
            <p>{achievement.text}</p>
            <p><strong>Editors:</strong> {achievement.editors.join(", ")}</p>
            <button onClick={() => handleDownloadPdf(achievement.pdf, achievement.title + ".pdf")}>
              {achievement.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
