import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import React from "react";
import Contact from "./components/Contract/Contact";
import Service from "./components/Service/Service";
import CreateContact from "./components/Contract/CraeteContact";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateVilla from "./components/Service/CreateVilla";
import CreateRoom from "./components/Service/CreateRoom";
import CreateHouse from "./components/Service/CreateHouse";
import CreateEmployee from "./components/Employee/CreateEmployee";
import Employee from "./components/Employee/Employee";
import EditEmployee from "./components/Employee/EditEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditContact from "./components/Contract/EditContact";
import DetailService from "./components/Service/DetailService";
import EditService from "./components/Service/EditService";
import CustomerList from "./components/Customer/CustomerList";
import CreateCustomer from "./components/Customer/CreateCustomer";
import EditCustomer from "./components/Customer/EditCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactList" element={<Contact />}></Route>
          <Route path="/customerList" element={<CustomerList />}></Route>
          <Route path="/createCustomer" element={<CreateCustomer />}></Route>
          <Route path="/serviceList" element={<Service />}></Route>
          <Route path="/employeeList" element={<Employee />}></Route>
          <Route path="/createContact" element={<CreateContact />}></Route>
          <Route path="/createVilla" element={<CreateVilla />}></Route>
          <Route path="/createRoom" element={<CreateRoom />}></Route>
          <Route path="/createHouse" element={<CreateHouse />}></Route>
          <Route path="/createEmployee" element={<CreateEmployee />}></Route>
          <Route path="/editEmployee/:id" element={<EditEmployee />}></Route>
          <Route path="/editContact/:id" element={<EditContact />}></Route>
          <Route path="/detailService/:id" element={<DetailService />}></Route>
          <Route path="/editService/:id" element={<EditService />}></Route>
          <Route path="/editCustomer/:id" element={<EditCustomer />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
