import "./App.css";
import EmployeeTable from "./Components/EmployeeTable";
import EmployeeTable2 from "./Components/EmployeeTable2";
import TableHead from "./Components/TableHead";


function App() {
    return (
        <div className="App">
            <h1>Employee Table - 1</h1>
            <EmployeeTable data={["Fname : John", "Lname : Smith", "Salary : $75K", "ID : 1001"]} />
            <EmployeeTable data={["Fname : James", "Lname : Web"]} />
            <EmployeeTable />
            <EmployeeTable data={[]} />

            <TableHead />
            <EmployeeTable2 />
        </div>
    );
}

export default App;
