import React from "react";

// function EmployeeTable({ data }) {
//     return (
        
//         <div>
//             {data.length > 0 ?(<h2>We have {data.length} items in this component</h2>) : (<h2>No data in this component</h2>)}
//             {data.map((item, index) => (
//                 <p key={index}> {item}</p>
//             ))}
//         </div>
//     );
// }

function EmployeeTable(props) {
    return ( 
        <div>
            {props?.data?.length > 0 ?(<h2>We have {props?.data?.length} items in this component</h2>) : (<h2>No data in this component</h2>)}
            {props?.data?.map((item, index) => (
                <p key={index}> {item}</p>
            ))}
        </div>
    );
}
export default EmployeeTable;
