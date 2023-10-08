'use client'
import React from 'react'
import { useEffect } from 'react'
import AddCourseForm from '../components/AddCourseForm'
import EditCourseFrom from '../components/EditCourseFrom'
import CoursesTable from '../components/CoursesTable'
import { useAdminContext } from '../Adminlogic/Logic'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

const Page = () => {

  const { handleClosePopup, handleOpenPopup, popUpOpen, setStudentsData, studentsData, setLoading, popUpEditForm, setPopUpEditForm, CoursesData, setCoursesData, } = useAdminContext()

  useEffect(() => {
    const coursesCollection = collection(db, "coursesData");

    // Set up a real-time listener for the students collection
    const unsubscribe = onSnapshot(coursesCollection, (querySnapshot) => {
      const courseData = [];
      querySnapshot.forEach((doc) => {
        courseData.push({ id: doc.id, ...doc.data() });
      });
      // You can also set this data in your context if needed
      setCoursesData(courseData);
      setLoading(false);
    });
    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [setCoursesData]);
  useEffect(() => {
    console.log(studentsData);
  }, [CoursesData]);
  return (
    <main className="sm:ml-60 pt-16 px-2 py-3  max-h-screen overflow-auto  min-h-screen">
      <button onClick = {(e) => handleOpenPopup()} className="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
        <span className="relative">Add New Course</span>
      </button>


      <CoursesTable />
      {popUpOpen && <AddCourseForm />}
      {popUpEditForm && <EditCourseFrom />}
    </main>
  )
}

export default Page