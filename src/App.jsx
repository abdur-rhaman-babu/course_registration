import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Coureses/Courses';
const App = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Course Registration</h1>
      <div className='xl:w-full flex gap-4 my-5'>
          <Courses/>
          <Bookmarks/>
      </div>
    </div>
  );
};

export default App;