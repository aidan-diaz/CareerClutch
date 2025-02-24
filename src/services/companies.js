import axios from 'axios'
const baseUrl = 'http://localhost:3001/companies'

const getAllCompanies = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createNewCompany = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateCompany = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteCompany = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllCompanies, createNewCompany, updateCompany, deleteCompany }

