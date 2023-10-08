'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a new context with an initial value
const AdminContext = createContext({});

// Custom hook to provide admin-related logic
export default function useAdminLogic() {
  console.log("useAdminLogic called");
  // Define your admin logic here
  const [imageFile, setImageFile] = useState();
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [editProductId, setEditProductId] = useState("");
  const [editStudentId, setEditStudentId] = useState("");
  const [category, setCategory] = useState("fruits"); // Initialize with a default category
  const [products, setProducts] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [popUpOpen, setPopupOpen] = useState(false);
  const [popUpEditForm, setPopUpEditForm] = useState(false)
  const [editCourseId, setEditCourseId] = useState("")

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    phone: "",
    emailAddress: "",
    address: "",
    cnic: "",
  });
  const [courseFormData, setCourseFormData] = useState({
    courseCode: "",
    courseTitle: "",
    description: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setCourseFormData({
      ...courseFormData,
      [name]: value
    })
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    console.log(newCategory);
    setFormData({
      ...formData,
      category: newCategory,
    });
    console.log(newCategory);
  };

  const handleAvailabilityChange = (e) => {
    const newAvailability = e.target.value;
    console.log(newAvailability);
    setFormData({
      ...formData,
      availability: newAvailability,
    });
    console.log(newAvailability);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
    console.log("openPopup called", popUpOpen);
  };

 const  handleCancleBtn = ()=>{
    setPopupOpen(false)
    setPopUpEditForm(false)
    setFormData(

    {fullName: "",
    fatherName: "",
    phone: "",
    emailAddress: "",
    address: "",
    cnic: "",
  },
  setCourseFormData(
    {
      courseCode: "",
      courseTitle: "",
      description: "",
      duration: "",
    }
  )
    )
  }

  const handleClosePopup = () => {
    setPopupOpen(false);
    setFormData({
      fullName: "",
      fatherName: "",
      phone: "",
      emailAddress: "",
      address: "",
      cnic: "",
    });
  };

  return {
    imageFile,
    setImageFile,
    imageError,
    setImageError,
    loading,
    setLoading,
    formData,
    setFormData,
    products,
    setProducts,
    category,
    setCategory,
    popUpOpen,
    setPopupOpen,
    handleClosePopup,
    handleOpenPopup,
    handleChange,
    handleCategoryChange,
    handleAvailabilityChange,
    editProductId,
    setEditProductId,
    studentsData,
    setStudentsData,
    editStudentId,
    setEditStudentId,
    popUpEditForm,
    setPopUpEditForm,
    handleCancleBtn,
    setEditCourseId,
    editCourseId,
    courseFormData,
    setCourseFormData,
    coursesData,
    setCoursesData
    
  };
}

// AdminContextProvider component
export function AdminContextProvider({ children }) {
  const Logic = useAdminLogic();

  return (
    <AdminContext.Provider value={Logic}>{children}</AdminContext.Provider>
  );
}

// Custom hook to access the AdminContext
export function useAdminContext() {
  return useContext(AdminContext);
}

