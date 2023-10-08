'use client'
import React, { useEffect } from 'react'
import AdminTables from '../components/AdminTables'
import AddProductsForm from '../components/AddProductsForm'
import { useAdminContext } from '../Adminlogic/Logic'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'
import EditProductForm from '../components/EditProductForm'

const page = () => {

  const { handleClosePopup, handleOpenPopup, popUpOpen, setStudentsData, studentsData, setLoading, popUpEditForm, setPopUpEditForm } = useAdminContext()

  useEffect(() => {
    const studentsCollection = collection(db, "studentsData");

    // Set up a real-time listener for the students collection
    const unsubscribe = onSnapshot(studentsCollection, (querySnapshot) => {
      const studentData = [];
      querySnapshot.forEach((doc) => {
        studentData.push({ id: doc.id, ...doc.data() });
      });
      // You can also set this data in your context if needed
      setStudentsData(studentData);
      setLoading(false);
    });
    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [setStudentsData]);
  useEffect(() => {
    console.log(studentsData);
  }, [studentsData]);
  return (
    <main className=" sm:ml-60 pt-16 pt-16 px-2 py-3  max-h-screen overflow-auto min-h-screen">
      {/* <button onClick={(e) => handleOpenPopup()} >opoen form</button>
      <button onClick={(e) => handleClosePopup()}>close form</button> */}

      <button onClick={(e) => handleOpenPopup()} className="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
        <span className="relative">Add New Student</span>
      </button>

      <AdminTables />
      {popUpOpen && <AddProductsForm />}
      {popUpEditForm && <EditProductForm />}



    </main>
  )
}

export default page