import React, { useState } from 'react';
import './style.scss';
import Navbar from "../Navbar";
import Footer from "../Footer";

const SkillsPage = () => {
  const [categoryId, setCategoryId] = useState(null);

  const handleToggle = (id) => {
    if (categoryId === id) {
      setCategoryId(null);
    } else {
      setCategoryId(id);
    }
  };

  const skills = [
    {
      id: 1,
      category: 'Front-end Development',
      skills: [
        { id: 1, name: 'HTML', proficiency: 90 },
        { id: 2, name: 'CSS', proficiency: 85 },
        { id: 3, name: 'JavaScript', proficiency: 80 },
        // Add more front-end development skills as needed
      ],
    },
    {
      id: 2,
      category: 'Back-end Development',
      skills: [
        { id: 1, name: 'Node.js', proficiency: 75 },
        { id: 2, name: 'Express.js', proficiency: 70 },
        { id: 3, name: 'DB Management', proficiency: 65 },
        // Add more back-end development skills as needed
      ],
    }
  ]
   const softSkills = [ {
      id: 3,
      category: 'Other Tech Skills',
      skills: [
        { id: 1, name: 'Version Control (Git)', proficiency: 80 },
        { id: 2, name: 'API Integration', proficiency: 75 },
        { id: 3, name: 'Testing and Debugging', proficiency: 70 },
        // Add more other tech skills as needed
      ],
    },
    {
      id: 4,
      category: 'Soft Skills',
      skills: [
        { id: 1, name: 'Communication', proficiency: 95 },
        { id: 2, name: 'Teamwork', proficiency: 90 },
        { id: 3, name: 'Problem Solving', proficiency: 85 },
        // Add more soft skills as needed
      ],
    },
  ];

  return (
    <div className="tags-container">
            <Navbar/>
      <div className='tech-skills'>
      {skills.map(skillCategory => (
        <div className={skillCategory.id === 1 ? 'tech-skills-first': 'tech-skills-second'} key={skillCategory.id}>
          <div className="tag" onClick={() => handleToggle(skillCategory.id)}>
            {skillCategory.category}
            <span className={`arrow ${categoryId === skillCategory.id ? 'open' : ''}`}>&#9662;</span>
          </div>
          {categoryId === skillCategory.id && (
            <div className="tag-content">
              {skillCategory.skills.map(skill => (
                <div className='skills' key={skill.id}>
                  <p>{skill.name}</p>
                  <div className="proficiency-bar">
                    <div
                      className="proficiency-level"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
      <div className='softSkills'>
      {softSkills.map(skillCategory => (
        <div className={skillCategory.id === 3 ? 'tech-skills-third': 'tech-skills-fourth'} key={skillCategory.id}>
          <div className="tag" onClick={() => handleToggle(skillCategory.id)}>
            {skillCategory.category}
            <span className={`arrow ${categoryId === skillCategory.id ? 'open' : ''}`}>&#9662;</span>
          </div>
          {categoryId === skillCategory.id && (
            <div className="tag-content">
              {skillCategory.skills.map(skill => (
                <div className='skills' key={skill.id}>
                  <p>{skill.name}</p>
                  <div className="proficiency-bar">
                    <div
                      className="proficiency-level"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default SkillsPage;
