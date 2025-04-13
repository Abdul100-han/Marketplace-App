import React, { useEffect, useState } from 'react'
import { app } from '../firebaseConfig';
import { getFireStore, getDocs, collection } from "firebase/firestore";


const AddPostScreen = () => {

  const [categoryList, setCategoryList] = useState([]);
  const db = getFireStore(app);
  useEffect(() => {
    getCategoryList();
  }, [])

  const getCategoryList = async() => {
    const querySnapshot = await getDocs(collection(db, 'Category'));

    querySnapshot.forEach((doc) => {
      console.log("Docs:", doc.data());
      setCategoryList(categoryList => [...categoryList, doc.data()])
      
    } )
  }
  return (
    <div>AddPostScreen</div>
  )
}

export default AddPostScreen