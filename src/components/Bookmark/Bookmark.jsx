import  PropTypes  from 'prop-types';
const Bookmark = ({bookmark, removeFromBookmark}) => {
    // console.log(bookmark)
    const {img, course_name, id} = bookmark;

    return (
        <div className='my-4 p-2 bg-white '>
            <img src={img} alt="" />
            <h1 className='text-1xl font-bold p-3'>{course_name}</h1>
            <div className='flex items-center justify-between gap-4'>
            <button className='w-full bg-blue-700 rounded p-1 text-2xl text-white'>Enroll</button>
            <button onClick={()=>removeFromBookmark(id,bookmark)} className='w-full bg-red-700 rounded p-1 text-2xl text-white'>Delete</button>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    removeFromBookmark: PropTypes.func.isRequired
}
export default Bookmark;