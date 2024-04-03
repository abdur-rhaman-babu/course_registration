import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({hundleBookmark}) => {
    const [courses, setCourses] = useState([])
    
    // fetch data with useEffect
    useEffect(()=>{
        fetch("course.json")
        .then((res)=>res.json())
        .then((data)=>setCourses(data))
    },[])


    return (
        <div className="xl:w-3/4 xl:grid xl:grid-cols-3 gap-4 w-3/4">
            {
                courses && courses.map((course)=> 
                <Course key={course.id} 
                course = {course} 
                hundleBookmark = {hundleBookmark}
                />)
            }
        </div>
    );
};

Courses.propTypes = {
    hundleBookmark: PropTypes.func.isRequired
}

export default Courses;