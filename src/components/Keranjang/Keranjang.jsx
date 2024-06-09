// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { delItem } from '../../redux/action'
// import { NavLink } from 'react-router-dom'

// const Keranjang = () => {
//   const state = useSelector((state) => state.addItem)
//   const dispatch = useDispatch()

//   const handleClose = (cartItemId) => {
//     dispatch(delItem(cartItemId))
//   }

//   const cartItems = (cartItem) => {
//     return (
//       <div className="px-4 my-5 rounded-lg shadow-md" key={cartItem.id}>
//         <div className="container py-4">
//           <button
//             onClick={() => handleClose(cartItem.id)}
//             className="btn-close absolute top-2 end-2"
//             aria-label="Close"
//           ></button>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             <div className="col-md-4">
//               <img
//                 src={cartItem.img}
//                 alt={cartItem.judul}
//                 className="h-40 lg:h-48 w-full object-cover rounded-md"
//               />
//             </div>
//             <div className="col-md-8">
//               <h3 className="text-xl font-semibold">{cartItem.judul}</h3>
//               <p className="text-gray-700">${cartItem.harga}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const emptyCart = () => {
//     return (
//       <div className="px-4 my-5 bg-gray-100 rounded-lg shadow-md py-5">
//         <div className="container py-4">
//           <div className="text-center">
//             <h3 className="text-xl font-semibold">Your Cart is Empty</h3>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const button = () => {
//     return (
//       <div className="container">
//         <div className="text-center">
//           <NavLink
//             to="/checkout"
//             className="btn btn-outline-primary mt-5 inline-block px-6 py-3 text-lg font-semibold rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
//           >
//             Proceed To Checkout
//           </NavLink>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto">
//       {state.length === 0 && emptyCart()}
//       {state.length !== 0 && state.map(cartItems)}
//       {state.length !== 0 && button()}
//     </div>
//   )
// }

// export default Keranjang
