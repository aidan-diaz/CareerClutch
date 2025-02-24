import { useState } from 'react'
import './App.css'

function App() {
  const [companies, setCompanies] = useState([])
  const [newCompanyName, setNewCompanyName] = useState('')
  const [newJobDescription, setNewJobDescription] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default App


//save companies to JSON server
//allow ability to add companies
//allow ability to delete companies
//allow users to filter companies based on name
//show an error if a user tries to add a company and role that already exist

//PUSH WORK
//allow users to edit company and role names