import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [bookmark, setBookmark] = useState([])
    useEffect(()=>{
        fetch("course.json")
        .then((res)=>res.json())
        .then((data)=>setCourses(data))
    },[])

    return (
        <div className="xl:w-3/4 xl:grid xl:grid-cols-3 gap-4 w-3/4">
            {
                courses && courses.map((course)=> <Course key={course.id} course = {course}/>)
            }
        </div>
    );
};

export default Courses;