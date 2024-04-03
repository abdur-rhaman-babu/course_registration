import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Coureses/Courses';
const App = () => {
  const [bookmarks, setBookmarks] = useState([])
  const [price,setPrice] = useState(0)
  const [credit, setCredit] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)

   // add to bookmark
   const hundleBookmark = (course) =>{
      // total credit hour
      const totalCredit = credit + course.credit;
      const totalCreditRemaining = creditRemaining - course.credit;

      if (totalCredit <= 20 && totalCreditRemaining >= 0){
        setCredit(totalCredit)
        setCreditRemaining(totalCreditRemaining)

       
        const addBookmark = [...bookmarks, course]
        // console.log(addBookmark)

        addBookmark.forEach((bookmark)=>{
          if(!bookmarks.includes(bookmark)){
            setBookmarks(addBookmark)
          }
        })

      const totalPrice = price + course.price;
        setPrice(parseInt(totalPrice + .1))
      }else{
        alert('your remaining credit is 0')
      }
  }

  const removeFromBookmark = (id,bookmark) =>{
    const filteredData = bookmarks.filter((bookmark)=> bookmark.id !==id)
    setBookmarks(filteredData)

    const totalCredit = credit - bookmark.credit;
    const totalCreditRemaining = creditRemaining + bookmark.credit;

    if (totalCredit >= 0 && totalCreditRemaining <= 20){
      setCredit(totalCredit)
      setCreditRemaining(totalCreditRemaining)

    const totalPrice = price - bookmark.price;
      setPrice(parseInt(totalPrice + .1))
    }
}

  return (
    <div>
      <h1 className='text-2xl font-bold'>Course Registration</h1>
      <div className='xl:w-full flex gap-4 my-5'>
          <Courses hundleBookmark = {hundleBookmark}/>
          <Bookmarks bookmarks = {bookmarks}
          price = {price}
          credit = {credit}
          creditRemaining = {creditRemaining}
          removeFromBookmark = {removeFromBookmark}
          />
      </div>
    </div>
  );

};

export default App;



