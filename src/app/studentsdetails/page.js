'use client'
import React, { useEffect } from 'react'
import AdminTables from '../components/AdminTables'
import AddProductsForm from '../components/AddProductsForm'
import { useAdminContext } from '../Adminlogic/Logic'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'
import EditProductForm from '../components/EditProductForm'

const page = () => {

  const { handleClosePopup, handleOpenPopup, popUpOpen, setStudentsData, studentsData ,setLoading , popUpEditForm, setPopUpEditForm } = useAdminContext()

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
    <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto bg-slate-400 min-h-screen">
      <button onClick={(e) => handleOpenPopup()} >opoen form</button>
      <button onClick={(e) => handleClosePopup()}>close form</button>

      <AdminTables />
      {popUpOpen && <AddProductsForm />}
      {popUpEditForm && <EditProductForm/>}
    </main>
  )
}

export default page