import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Coureses/Courses';
const App = () => {
  const [bookmarks, setBookmarks] = useState([])
  const [price,setPrice] = useState(0)
  const [credit, setCredit] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)
//  console.log(price)
   // add to bookmark
   const hundleBookmark = (course) =>{
    // console.log(course.price)
    const addBookmark = [...bookmarks,course]
    setBookmarks(addBookmark)

    // total price
    const totalPrice = price + course.price;
    setPrice(parseInt(totalPrice + .1))

    // // total credit hour
    // const totalCredit = credit + course.credit;
    // if (totalCredit <= 20){
    //   setCredit(totalCredit)
    // }else if (totalCredit >= 20){
    //   alert("Total credit is over")
    // }

    // // total credit remaining hour
    // const totalCreditRemaining = creditRemaining - course.credit;
    // if(totalCreditRemaining >= 0){
    //   setCreditRemaining(totalCreditRemaining)
    // }

      // total credit hour
      const totalCredit = credit + course.credit;
      const totalCreditRemaining = creditRemaining - course.credit;
      if (totalCredit <= 20 && totalCreditRemaining >= 0){
        setCredit(totalCredit)
        setCreditRemaining(totalCreditRemaining)
      }else{
        alert('your remaining credit is 0')
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
          />
      </div>
    </div>
  );
};

export default App;