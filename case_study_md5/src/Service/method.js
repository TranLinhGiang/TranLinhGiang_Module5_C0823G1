import axios from "axios";

export const getAllEmployeeList = async () => {
    try {
        let rs = await axios.get("http://localhost:3000/employeeList")
        return rs.data
    } catch (e) {
        return undefined
    }
}

export const createEmployee = async (task) => {
    try {
        let rs = await axios.post("http://localhost:3000/employeeList", task)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editEmployee = async (employee) => {
    try {
        let rs = await axios.put(`http://localhost:3000/employeeList/${employee.id}`, employee)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const getEditEmployee = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:3000/employeeList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}

export const deletes = async (employee) => {
    try {
        let request = await axios.delete(`http://localhost:3000/employeeList/${employee.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}
export const getAllContact = async () => {
    try {
        let rs = await axios.get("http://localhost:8000/contactList")
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const getContactEdit = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8000/contactList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editContact = async (contact) => {
    try {
        let rs = await axios.put(`http://localhost:8000/contactList/${contact.id}`, contact)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const createContact = async (contact) => {
    try {
        let rs = await axios.post("http://localhost:8000/contactList", contact)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const deleteContact = async (contact) => {
    try {
        let request = await axios.delete(`http://localhost:8000/contactList/${contact.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}
export const getAllServiceList = async () => {
    try {
        let rs = await axios.get("http://localhost:1234/serviceList")
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const createService = async (service) => {
    try {
        let rs = await axios.post(`http://localhost:1234/serviceList`, service)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const detailService = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:1234/serviceList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editService = async (service) => {
    try {
        let rs = await axios.put(`http://localhost:1234/serviceList/${service.id}`, service)
        return rs.data
    } catch (e) {
        return undefined
    }
}



export const getEditService = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:1234/serviceList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const deleteService = async (service) => {
    try {
        let request = await axios.delete(`http://localhost:1234/serviceList/${service.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}