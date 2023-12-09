import React from "react";

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={`text-base block mb-2 ${className ? className : ""}`}
        >
            {value ? value : children}
        </label>
    );
}

// export default function InputLabel({ value, className = '', children, ...props }) {
//     return (
//         <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
//             {value ? value : children}
//         </label>
//     );
// }
