"use client"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useState } from "react";
import { db, storage } from "../../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { toast } from "react-toastify"
import { useAdminContext } from "../Adminlogic/Logic";


const EditProductForm = () => {

    const {
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
        popUpEditForm,
        setPopUpEditForm,
        editStudentId,
        handleCancleBtn
    } = useAdminContext()

    const updateStudent = async () => {
        const studentRef = doc(db, "studentsData", editStudentId); // Replace 'editStudentId' with the ID of the student you want to update.
    
        try {
          setLoading(true);
    
          // Create an object with updated data.
          const updatedData = {
            fullName: formData.fullName,
            fatherName: formData.fatherName,
            phone: formData.phone,
            emailaddress: formData.emailAddress,
            address: formData.address,
            cnic: formData.cnic,
            // Add other fields as needed
          };
    
          // Update the student document in Firestore.
          await updateDoc(studentRef, updatedData);
    
          // Clear formData or take any other necessary action here.
          setFormData({
            fullName: "",
            fatherName: "",
            phone: "",
            emailAddress: "",
            address: "",
            cnic: "",
            // Clear other fields as needed
          });
    
          toast.success("Student Data Updated Successfully");
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
                    Fill the information very carefully.
                </p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        required=""
                        onChange={handleChange}
                        placeholder="Full Name"
                        aria-label="fullname"
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="fatherName">
                        Father Name
                    </label>
                    <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        id="fatherName"
                        name="fatherName"
                        type="text"
                        value={formData.fatherName}
                        required=""
                        onChange={handleChange}
                        placeholder="Father Name"
                        aria-label="fahtername"
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="address">
                        Student Address
                    </label>
                    <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        required=""
                        onChange={handleChange}
                        placeholder="Student Address"
                        aria-label="address"
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="emailAddress">
                        Email Address
                    </label>
                    <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        required=""
                        onChange={handleChange}
                        placeholder="Email Address"
                        aria-label="emailAddress"
                    />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="cnic">
                        CNIC
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="cnic"
                        name="cnic"
                        type="number"
                        value={formData.cnic}
                        required=""
                        onChange={handleChange}
                        placeholder="CNIC "
                        aria-label="cnic"
                    />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="phone"
                        name="phone"
                        type="number"
                        value={formData.phone}
                        required=""
                        onChange={handleChange}
                        placeholder="phone Number"
                        aria-label="phone"
                    />
                </div>
                <div className="inline-block mt-2 w-full pr-1">
                    <label className="hidden block text-sm text-gray-600" htmlFor="category">
                        Category
                    </label>
                    <select onChange={handleCategoryChange} value={formData.category} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="course1">course1</option>
                        <option value="course2">course2</option>
                        <option value="course3">course3</option>
                        <option value="course4">course4</option>
                    </select>
                </div>
                <div className="mt-6">
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                        type="button"
                        onClick={updateStudent}
                        disabled={loading}
                    >
                        {loading ? <div>updating <span className="text-2xl"> <LuLoader /></span></div> : <div className="flex justify-between"><span>Update Student Data</span> <span className="text-xl mt-2 ml-2"><MdOutlineAddShoppingCart /></span></div>} {/* Show loading text while uploading */}
                    </button>
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                        type="button"
                        onClick={()=>handleCancleBtn()}
                        disabled={loading}
                    >
                        {loading ? <></> : <div className="flex justify-between"><span>cancel</span> <span className="text-xl mt-2 ml-2"><MdOutlineAddShoppingCart /></span></div>} {/* Show loading text while uploading */}
                    </button>


                </div>
            </form>
        </div>

    )
}

export default EditProductForm