import React, { useState } from 'react';
import './style.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

// Data
const courses = [
  { title: 'BTech(IT)  ', instructor: 'Dr Akhilesh Das Institute of Technology and Management', description: 'Description for BTech(IT)' },
  { title: '12th  ', instructor: 'KIIT World School', description: 'Description for 12th' },
  { title: '10th  ', instructor: 'KIIT World School', description: 'Description for 10th' }
];

// JourneyLine Component
const JourneyLine = () => <div className="journey-line"></div>;

// EducationPage Component
const Education = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleCourseHover = (index) => {
    setHoveredCourse(index);
  };

  const handleCourseLeave = () => {
    setHoveredCourse(null);
  };

  return (
    <div className='main_class'>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Education</h1>
        <ul className="course-list">
          {courses.map((course, index) => (
            <>
              <li
                key={index}
                onMouseEnter={() => handleCourseHover(index)}
                onMouseLeave={handleCourseLeave}
              >
                <div className="course-info">
                  <span className="course-title">{course.title}</span>
                  <span className="course-instructor">{course.instructor}</span>
                </div>
              </li>
              {index !== courses.length - 1 && <JourneyLine />}
            </>
          ))}
        </ul>
      </div>
      {hoveredCourse !== null && (
          <div className="popup">
            <span className="popup-content">{courses[hoveredCourse].description}</span>
          </div>
        )}
      <Footer />
    </div>
  );
};

// Render the EducationPage component
export default Education;
