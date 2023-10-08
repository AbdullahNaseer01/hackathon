'use client'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useAdminContext } from "../Adminlogic/Logic";

const CoursesForm = () => {
  const {
    imageFile,
    setImageFile,
    imageError,
    setImageError,
    loading,
    setLoading,
    formData,
    setFormData,
    handleChange,
    handleCategoryChange,
    handleClosePopup,
    setPopupOpen,
    handleAvailabilityChange,
    courseFormData,
    setCourseFormData,
    handleCancleBtn
  } = useAdminContext();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (
      !courseFormData.courseTitle ||
      !courseFormData.courseCode ||
      !courseFormData.description ||
      !courseFormData.duration
    ) {
      console.error("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return; // Do not proceed with adding the document.
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "coursesData"), {
        courseTitle: courseFormData.courseTitle,
        courseCode: courseFormData.courseCode,
        description: courseFormData.description,
        duration: courseFormData.duration,
      });

      // Clear formData or take any other necessary action here.
      setCourseFormData({
        courseTitle: "",
        courseCode: "",
        description: "",
        duration: "",
      });

      toast.success("Course Added Successfully");
    } catch (error) {
      // Handle any errors that occur during the process.
      console.error(error);
      toast.error(error.message, "Please try again later");
    } finally {
      setPopupOpen(false);
      setLoading(false);
    }
  };

  return (
    <div className="leading-loose  flex items-center justify-center h-screen fixed inset-0  z-50">
      <form className="p-10 bg-white rounded shadow-xl">
        <p className="text-lg text-gray-800 font-medium pb-4">
          Fill in the course information carefully.
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
            onClick={handleAddCourse}
            disabled={loading}
          >
            {loading ? (
              <div>
                Registering Course
                <span className="text-2xl"> <LuLoader /></span>
              </div>
            ) : (
              <div className="flex justify-between">
                <span>Register Course</span>
                <span className="text-xl mt-2 ml-2">
                  <MdOutlineAddShoppingCart />
                </span>
              </div>
            )}
          </button>
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={() => handleCancleBtn()}
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

export default CoursesForm;
