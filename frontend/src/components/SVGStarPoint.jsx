import React from "react";

const SVGStarPoint = ({ colorValue }) => {
  return (
    <>
      <div className="group">
        <svg
          viewBox="0 0 20 20"
          fill={colorValue}
          width="26"
          height="26"
            className="transition duration-200 ease-in-out cursor-pointer "
          style={
            {
              //   width: "100%",
              //   height: "100%",
              // color: "rgb(255, 218, 121)",/
            }
          }
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
    </>
  );
};

export default SVGStarPoint;

// <>
//   <div className="group">
//     <svg
//       viewBox="0 0 20 20"
//       fill="rgb(139, 139, 139)"
//       width="26"
//       height="26"
//       className="hover:fill-[#ffda79] cursor-pointer transition duration-200 ease-in-out"
//       style={
//         {
//           //   width: "100%",
//           //   height: "100%",
//           // color: "rgb(255, 218, 121)",/
//         }
//       }
//     >
//       <path
//         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//       ></path>
//     </svg>
//   </div>
// </>
