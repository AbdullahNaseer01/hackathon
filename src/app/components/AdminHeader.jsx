// import React from 'react'

// const AdminHeader = () => {
//   return (
//     <>
//     <div className="w-full flex flex-col h-screen overflow-y-hidden">
//   {/* Desktop Header */}
//   <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
//     <div className="w-1/2" />
//     <div className="relative w-1/2 flex justify-end">
//       <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
//         <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
//       </button>
//       <button className="h-full w-full fixed inset-0 cursor-default" />
//       <div
//         x-show="isOpen"
//         className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
//       >
//         <a href="#" className="block px-4 py-2 account-link hover:text-white">
//           Account
//         </a>
//         <a href="#" className="block px-4 py-2 account-link hover:text-white">
//           Support
//         </a>
//         <a href="#" className="block px-4 py-2 account-link hover:text-white">
//           Sign Out
//         </a>
//       </div>
//     </div>
//   </header>
//   {/* Mobile Header & Nav */}
//   <header
//     x-data="{ isOpen: false }"
//     className="w-full bg-sidebar py-5 px-6 sm:hidden"
//   >
//     <div className="flex items-center justify-between">
//       <a
//         href="index.html"
//         className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
//       >
//         Admin
//       </a>
//       <button
//         click="isOpen = !isOpen"
//         className="text-white text-3xl focus:outline-none"
//       >
//         <i x-show="!isOpen" className="fas fa-bars" />
//         <i x-show="isOpen" className="fas fa-times" />
//       </button>
//     </div>
//     {/* Dropdown Nav
//       <!-- <nav :class="isOpen ? 'flex': 'hidden'" class="flex flex-col pt-4">
//           <a href="index.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
//               <i class="fas fa-tachometer-alt mr-3"></i>
//               Dashboard
//           </a>
//           <a href="blank.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-sticky-note mr-3"></i>
//               Blank Page
//           </a>
//           <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-table mr-3"></i>
//               Tables
//           </a>
//           <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-align-left mr-3"></i>
//               Forms
//           </a>
//           <a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-tablet-alt mr-3"></i>
//               Tabbed Content
//           </a>
//           <a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-calendar mr-3"></i>
//               Calendar
//           </a>
//           <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-cogs mr-3"></i>
//               Support
//           </a>
//           <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-user mr-3"></i>
//               My Account
//           </a>
//           <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//               <i class="fas fa-sign-out-alt mr-3"></i>
//               Sign Out
//           </a>
//           <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//               <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
//           </button>
//       </nav> */}{" "}
//     --&gt;
//     {/* <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//           <i class="fas fa-plus mr-3"></i> New Report
//       </button> */}
//   </header>
//   <div className="w-full overflow-x-hidden border-t flex flex-col">
//     <main className="w-full flex-grow p-6">
//       <h1 className="text-3xl text-black pb-6">Dashboard</h1>
//       <div className="flex flex-wrap mt-6">
//         <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
//           <p className="text-xl pb-3 flex items-center">
//             <i className="fas fa-plus mr-3" /> Monthly Reports
//           </p>
//           <div className="p-6 bg-white">
//             <canvas id="chartOne" width={400} height={200} />
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
//           <p className="text-xl pb-3 flex items-center">
//             <i className="fas fa-check mr-3" /> Resolved Reports
//           </p>
//           <div className="p-6 bg-white">
//             <canvas id="chartTwo" width={400} height={200} />
//           </div>
//         </div>
//       </div>
//       <div className="w-full mt-12">
//         <p className="text-xl pb-3 flex items-center">
//           <i className="fas fa-list mr-3" /> Latest Reports
//         </p>
//         <div className="bg-white overflow-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
//                   Name
//                 </th>
//                 <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
//                   Last name
//                 </th>
//                 <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//                   Phone
//                 </th>
//                 <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//                   Email
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               <tr>
//                 <td className="w-1/3 text-left py-3 px-4">Lian</td>
//                 <td className="w-1/3 text-left py-3 px-4">Smith</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr className="bg-gray-200">
//                 <td className="w-1/3 text-left py-3 px-4">Emma</td>
//                 <td className="w-1/3 text-left py-3 px-4">Johnson</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="w-1/3 text-left py-3 px-4">Oliver</td>
//                 <td className="w-1/3 text-left py-3 px-4">Williams</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr className="bg-gray-200">
//                 <td className="w-1/3 text-left py-3 px-4">Isabella</td>
//                 <td className="w-1/3 text-left py-3 px-4">Brown</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="w-1/3 text-left py-3 px-4">Lian</td>
//                 <td className="w-1/3 text-left py-3 px-4">Smith</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr className="bg-gray-200">
//                 <td className="w-1/3 text-left py-3 px-4">Emma</td>
//                 <td className="w-1/3 text-left py-3 px-4">Johnson</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="w-1/3 text-left py-3 px-4">Oliver</td>
//                 <td className="w-1/3 text-left py-3 px-4">Williams</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//               <tr className="bg-gray-200">
//                 <td className="w-1/3 text-left py-3 px-4">Isabella</td>
//                 <td className="w-1/3 text-left py-3 px-4">Brown</td>
//                 <td className="text-left py-3 px-4">
//                   <a className="hover:text-blue-500" href="tel:622322662">
//                     622322662
//                   </a>
//                 </td>
//                 <td className="text-left py-3 px-4">
//                   <a
//                     className="hover:text-blue-500"
//                     href="mailto:jonsmith@mail.com"
//                   >
//                     jonsmith@mail.com
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//     <footer className="w-full bg-white text-right p-4">
//       Built by{" "}
//       <a target="_blank" href="https://davidgrzyb.com" className="underline">
//         David Grzyb
//       </a>
//       .
//     </footer>
//   </div>
// </div>

//     </>
//   )
// }

// export default AdminHeader

"use client"
import React from 'react'
import { RiMenu2Line, RiDeleteBinLine } from 'react-icons/ri';

const AdminHeader = ({toggleMenu}) => {
  return (
    <header className="sm:fixed right-0 top-0 sm:left-60 bg-yellow-50 py-3 px-4 h-16">
        <div className='text-2xl sm:hidden flex justify-end' onClick={toggleMenu}><RiMenu2Line /></div>

        <div className="hidden  sm:inline max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <button
                type="button"
                className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"

              >
                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
                <span className="text-sm">Archive</span>
              </button>
            </div>
            <div className="text-lg font-bold">Todays Plan</div>
            <div>
              <button
                type="button"
                className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"
              >
                <span className="text-sm">This week</span>
                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default AdminHeader