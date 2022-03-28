import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { CSSCourses, HTMLCourses, JSCourses } from '../data/courses';
import CourseContent from './courses/CourseContent';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><Link to='/courses/html'>HTML</Link></li>
        <li><Link to='/courses/css'>CSS</Link></li>
        <li><Link to='/courses/javascript'>JavaScript</Link></li>
      </ul>
    </div>

    <Routes>
      <Route path="/CSS" element={<CourseContent data={CSSCourses}/>} ></Route>
      <Route path="/HTML" element={<CourseContent data={HTMLCourses}/>} ></Route>
      <Route path="/JavaScript" element={<CourseContent data={JSCourses}/>} ></Route>
    </Routes>
  </div>
);

export default Courses;