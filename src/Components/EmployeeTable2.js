import React from "react";

const emloyeeList = [
    { fname: "John", lname: "Smith", salary: "$75K", ID: 1001 },
    { fname: "James", lname: "Web", salary: "$120K", ID: 1002 },
    { fname: "Kennedy", lname: "Stokes", salary: "$150K", ID: 1003 },
    { fname: "Brooklyn", lname: "Klein", salary: "$90K", ID: 1004 },
];

function EmployeeTable2() {
    const items = emloyeeList?.map((item, index) => {
        return (
            <div key={index}>
                <div className="item">{item.fname} </div>
                <div className="item">{item.lname} </div>
                <div className="item">{item.salary} </div>
                <div className="item">{item.ID} </div>
            </div>
        );
    });
    return <div>{items}</div>;
}
export default EmployeeTable2;
