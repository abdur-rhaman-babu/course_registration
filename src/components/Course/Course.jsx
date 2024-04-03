import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({course}) => {
    console.log(course)
    const {img, course_name,details,price,credit} = course;
    return (
        <div className='border-solid border-2 border-purple-500 p-2 rounded'>
            <img src={img} alt="" />
            <h1 className='text-xl font-semibold'>{course_name}</h1>
            <p className='h-20 my-2'>{details}</p>
            <div className='flex justify-between my-2'>
            <p className='flex items-center gap-1 text-xl'> <FiDollarSign /> price: {price}</p>
            <p className='flex items-center gap-1 text-xl'> <IoBookOutline /> credit: {credit}hr</p>
            </div>
            <button className='bg-blue-600 rounded w-full p-1 text-white'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;