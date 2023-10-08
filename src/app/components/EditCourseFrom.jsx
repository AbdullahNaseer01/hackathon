'use client'

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAdminContext } from "../Adminlogic/Logic";

const EditCourseForm = () => {
  const {
    setLoading,
    courseFormData,
    setCourseFormData,
    editCourseId,
    setPopupOpen,
    handleChange,
    handleCancleBtn,
    loading,
    setPopUpEditForm
  } = useAdminContext();

  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const loadCourseDetails = async () => {
      const courseDocRef = doc(db, "coursesData", editCourseId);

      try {
        const courseDocSnap = await getDoc(courseDocRef);
        if (courseDocSnap.exists()) {
          const courseData = courseDocSnap.data();
          setCourseDetails(courseData);
          setCourseFormData({
            courseTitle: courseData.courseTitle || "",
            courseCode: courseData.courseCode || "",
            description: courseData.description || "",
            duration: courseData.duration || "",
          });
        } else {
          console.error("Course not found.");
        }
      } catch (error) {
        console.error("Error loading course details:", error);
      }
    };

    loadCourseDetails();
  }, [editCourseId, setCourseFormData]);

  const updateCourse = async () => {
    if (
      !courseFormData.courseTitle ||
      !courseFormData.courseCode ||
      !courseFormData.description ||
      !courseFormData.duration
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const courseRef = doc(db, "coursesData", editCourseId);

    try {
      setLoading(true);

      const updatedData = {
        courseTitle: courseFormData.courseTitle,
        courseCode: courseFormData.courseCode,
        description: courseFormData.description,
        duration: courseFormData.duration,
        // Add other fields as needed
      };

      await updateDoc(courseRef, updatedData);

      setCourseFormData({
        courseTitle: "",
        courseCode: "",
        description: "",
        duration: "",
        // Clear other fields as needed
      });

      toast.success("Course Data Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.message, "Please try again later");
    } finally {
      setPopUpEditForm(false);
      setLoading(false);
    }
  };

  return (
    <div className="leading-loose flex items-center justify-center h-screen fixed inset-0 z-50">
      <form className="p-10 bg-white rounded shadow-xl">
        <p className="text-lg text-gray-800 font-medium pb-4">
          Edit the course information carefully.
        </p>
        <div className="">
          <label className="block text-sm text-gray-600" htmlFor="courseTitle">
            Course Title
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="courseTitle"
            name="courseTitle"
            type="text"
            value={courseFormData.courseTitle}
            required=""
            onChange={handleChange}
            placeholder="Course Title"
            aria-label="courseTitle"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="courseCode">
            Course Code
          </label>
          <input
            className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="courseCode"
            name="courseCode"
            type="text"
            value={courseFormData.courseCode}
            required=""
            onChange={handleChange}
            placeholder="Course Code"
            aria-label="courseCode"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="description">
            Description
          </label>
          <input
            className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="description"
            name="description"
            type="text"
            value={courseFormData.description}
            required=""
            onChange={handleChange}
            placeholder="Description"
            aria-label="description"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="duration">
            Duration
          </label>
          <input
            className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="duration"
            name="duration"
            type="text"
            value={courseFormData.duration}
            required=""
            onChange={handleChange}
            placeholder="Duration"
            aria-label="duration"
          />
        </div>
        <div className="mt-6">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={updateCourse}
            disabled={loading}
          >
            {loading ? (
              <div>
                Updating Course
                <span className="text-2xl">
                  <LuLoader />
                </span>
              </div>
            ) : (
              <div className="flex justify-between">
                <span>Update Course</span>
                <span className="text-xl mt-2 ml-2">
                  <MdOutlineAddShoppingCart />
                </span>
              </div>
            )}
          </button>
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={handleCancleBtn}
            disabled={loading}
          >
            {loading ? (
              <></>
            ) : (
              <div className="flex justify-between">
                <span>Cancel</span>
                <span className="text-xl mt-2 ml-2">
                  <MdOutlineAddShoppingCart />
                </span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourseForm;

