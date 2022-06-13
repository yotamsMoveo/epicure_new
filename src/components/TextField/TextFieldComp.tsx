import React, { useState } from "react";
import search_logo from "../../assets/images/search.png";
import "../TextField/TextField.scss";

// function TextFieldComp(props) {
//   const [searchByElement, setSearchByElement] = useState("");
//   const [selectElement, setSelectElement] = useState("");

//   const inputChanged = (event) => {
//     setSearchByElement(event.target.value);
//   };

//   const searchSelectedElement = (event) => {
//     event.preventDefault();
//     setSelectElement(searchByElement);
//     setSearchByElement("");
//   };

//   return (
//     <div className="TextFieldComp_body">
//       <form onSubmit={searchSelectedElement}>
//         <label>
//           <button type="submit" onClick={searchSelectedElement}>
//             <img src={search_logo} className="TextFieldComp_searchLogo" />
//           </button>
//           <input type="text" name="name" onChange={inputChanged}></input>
//         </label>
//       </form>
//     </div>
//   );
// }
// export default TextFieldComp;
