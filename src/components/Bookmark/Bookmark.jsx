import  PropTypes  from 'prop-types';
const Bookmark = ({bookmark}) => {
    // console.log(bookmark)
    const {img, course_name} = bookmark;
    return (
        <div className='my-4 p-2 bg-white '>
            <img src={img} alt="" />
            <h1 className='text-1xl font-bold p-3'>{course_name}</h1>
            <button className='w-full bg-red-700 rounded p-1 text-2xl text-white'>Enroll</button>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;