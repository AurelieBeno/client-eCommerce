// import React, { Component } from "react";

// import "./Category.css";

// import { Switch, Link, Route } from "react-router-dom";
// import Clothing from "./Clothing";
// import Shoes from "./Shoes";

// class Category extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark primary-color">
//         <a className="navbar-brand" href="#!">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="#!">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#!">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#!">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" href="#!">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

// <div>
//   <nav className="Category">
//     <ul>
//       <button className="hover-button">
//         <span className="hover-button--off">Clothing</span>
//         <span className="hover-button--on">
//           <div>
//             <li key="CategoryClothes">
//               <Link to="/clothing" />
//             </li>
//           </div>
//         </span>
//       </button>

//       <button>
//         Shoes
//         <div>
//           <li key="CategoryShoes">
//             <Link to="/shoes" />
//           </li>
//         </div>
//       </button>

//       <Link to="#">Accessories</Link>

//       <Link to="#">Activewear</Link>

//       <Link to="#">Face + Body</Link>

//       <Link to="#">Living + Gifts</Link>

//       <Link to="#">Brands</Link>

//       <Link to="#">Outlet</Link>

//       <Link to="#">Marketplace</Link>

//       <Link to="#">Inspiration</Link>
//     </ul>
//   </nav>
//   <Switch>
//     <Route path="/clothing" component={Clothing} />
//     <Route path="/shoes" component={Shoes} />
//   </Switch>
// </div>
//     );
//   }
// }

// export default Category;
