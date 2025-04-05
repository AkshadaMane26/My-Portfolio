import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGit, FaGithub
} from "react-icons/fa";
import {
  SiBootstrap, SiJquery, SiMysql, SiMongodb, SiTensorflow, SiKeras, SiJupyter, SiGooglecolab,
  SiScikitlearn,  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import "./Skills.css";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "jQuery", icon: <SiJquery color="#0769AD" /> }, // Added jQuery
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  ],
  Backend: [
   
    { name: "Flask", icon: <FaPython color="#3776AB" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  ],
  
  Machine_Learning: [
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
    { name: "Keras", icon: <SiKeras color="#D00000" /> },
    { name: "Jupyter", icon: <SiJupyter color="#F37726" /> },
    { name: "Google Colab", icon: <SiGooglecolab color="#F9AB00" /> },
    { name: "Scikit Learn", icon: <SiScikitlearn color="#F7931E" /> },
  ],
  Others: [
    { name: "Git", icon: <FaGit color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="white" /> },
    { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> }, // Added AWS
  ],
};

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills on which I have been working for the past 3 years.</p>

      <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={15}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  speed={800}
  loop={true}
  breakpoints={{
    480: { slidesPerView: 1 }, // Small screens
    768: { slidesPerView: 2 }, // Tablets
    1024: { slidesPerView: 3 }, // Laptops
    1280: { slidesPerView: 4 }, // Large screens
  }}
  className="skills-slider"
>


        {Object.entries(skillsData).map(([category, skills]) => (
          <SwiperSlide key={category} className="skills-slide">
            <div className="skills-card">
              <h3>{category.replace("_", " ")}</h3>
              <div className="skills-list">
                {skills.map(({ name, icon }) => (
                  <span className="skill-badge" key={name}>
                    {icon} {name}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
