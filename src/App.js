import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import { useContext, useEffect } from 'react';
import { EmployeeContext } from './context/EmployeeContext';

function App() {
    const employeesContext = useContext(EmployeeContext)

    useEffect(() => {
        employeesContext.getStoredEmployees()
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
