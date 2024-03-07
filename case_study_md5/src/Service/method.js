import axios from "axios";

export const getAllEmployeeList = async (page, perPage) => {
    try {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        const rs = await axios.get(`http://localhost:8080/employeeList`);

        const total = rs.data.length;
        const total_pages = Math.ceil(total / perPage);

        // Lấy chỉ số của dữ liệu từ startIndex đến endIndex
        const data = rs.data.slice(startIndex, endIndex);

        return {data, total, total_pages};
    } catch (e) {
        console.error('Error:', e);
        return undefined;
    }
}

export const createEmployee = async (task) => {
    try {
        let rs = await axios.post("http://localhost:8080/employeeList", task)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editEmployee = async (employee) => {
    try {
        let rs = await axios.put(`http://localhost:8080/employeeList/${employee.id}`, employee)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const getEditEmployee = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/employeeList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}

export const deletes = async (employee) => {
    try {
        let request = await axios.delete(`http://localhost:8080/employeeList/${employee.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}
export const getAllContact = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/contactList")
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const getContactEdit = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/contactList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editContact = async (contact) => {
    try {
        let rs = await axios.put(`http://localhost:8080/contactList/${contact.id}`, contact)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const createContact = async (contact) => {
    try {
        let rs = await axios.post("http://localhost:8080/contactList", contact)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const deleteContact = async (contact) => {
    try {
        let request = await axios.delete(`http://localhost:8080/contactList/${contact.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}
export const getAllServiceList = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/serviceList")
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const createService = async (service) => {
    try {
        let rs = await axios.post(`http://localhost:8080/serviceList`, service)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const detailService = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/serviceList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editService = async (service) => {
    try {
        let rs = await axios.put(`http://localhost:8080/serviceList/${service.id}`, service)
        return rs.data
    } catch (e) {
        return undefined
    }
}



export const getEditService = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/serviceList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const deleteService = async (service) => {
    try {
        let request = await axios.delete(`http://localhost:8080/serviceList/${service.id}`)
        return request.data;
    } catch (e) {
        console.log(e)
    }
}
export const getAllCustomer = async () => {
    try {
        let rs = await axios.get("  http://localhost:8080/customerList")
        return rs.data
    } catch (e) {
        return undefined
    }
}