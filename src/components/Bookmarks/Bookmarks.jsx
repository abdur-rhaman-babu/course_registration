import  PropTypes  from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,price,credit,creditRemaining, removeFromBookmark}) => {
    
    return (
        <div className="bg-blue-100 xl:w-1/4 p-2 overflow-auto h-screen shadow-md">
            <h1 className="text-3xl bg-white p-4 font-semibold">Bookmarks: {bookmarks.length}</h1>
            <h1 className="text-2xl bg-green-100 my-3 p-4 font-semibold">Total Price: ${price}</h1>
            <h1 className="text-2xl bg-yellow-100 my-3 p-4 font-semibold">Credit Remaining: {creditRemaining}</h1>
            <h1 className="text-2xl bg-red-100 my-3 p-4 font-semibold">Total credit hour: {credit}</h1>
            {
                bookmarks && bookmarks.map((bookmark)=> 
                <Bookmark key={bookmark.id} 
                bookmark = {bookmark}
                removeFromBookmark = {removeFromBookmark}
                />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
    creditRemaining:PropTypes.number.isRequired,
    removeFromBookmark: PropTypes.func.isRequired
}

export default Bookmarks;