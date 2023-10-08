"use client"
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
// import { AdminContextProvider } from '../(Adminlogic)/Logic';
import { db } from "../../../firebase/firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { useAdminContext } from "../Adminlogic/Logic";


const AdminTables = ({ }) => {
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
        studentsData,
        setStudentsData,
        editStudentId,
        setEditStudentId

    } = useAdminContext()

    const handleDeleteStudent = async (student) => {
        console.log(student, "student")
        try {
            await deleteDoc(doc(db, "studentsData", student.id));
            toast.success("Student has been Deleted Successfully!!");
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast.error("Some issue while deleting try Again Later");
        }
    };


    return (
        <>
            <div className="w-full mt-12">
                <p className="text-xl pb-3 flex items-center">
                    <i className="fas fa-list mr-3"></i>{category} Products
                </p>
                <div className="bg-white overflow-auto">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Student Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Father Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    CNIC
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email Address
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Address
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Delete
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Edit
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student) => (
                                <tr key={student.id}>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.id}</p>
                                    </td>
                                    {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="flex-grow object-cover w-full h-full rounded-full hover:scale-300 "
                                                    src={product.imageFile}
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.title}
                                                </p>
                                            </div>
                                        </div>
                                    </td> */}
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.fullName}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative">{student.fatherName}</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.cnic}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.phone}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.emailAddress}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{student.address}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" onClick={() => { handleDeleteStudent(student) }}>
                                        <p className="text-gray-900 whitespace-no-wrap">Delete <AiFillDelete /></p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap" onClick={() => {
                                            handleOpenPopup()
                                            setEditStudentId(student.id)
                                            setFormData({
                                                fullName: student.fullName,
                                                fatherName: student.fatherName,
                                                phone: student.phone,
                                                emailAddress: student.emailAddress,
                                                address: student.address,
                                                cnic: student.student,
                                            });
                                            console.log(student)
                                        }} >Edit <FiEdit3 /></p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default AdminTables
