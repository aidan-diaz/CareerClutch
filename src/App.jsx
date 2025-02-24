import { useState, useEffect } from 'react'
import './App.css'
import CompanyForm from './components/CompanyForm'
import Company from "./components/Company"
import companyService from './services/companies'

function App() {
  const [companies, setCompanies] = useState([])
  const [newCompanyName, setNewCompanyName] = useState('')
  const [newJobTitle, setNewJobTitle] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  useEffect(() => {
    companyService
      .getAllCompanies()
      .then(initialCompanies => {
        setCompanies(initialCompanies)
      })
  }, [])
  console.log('companies: ', companies.length, companies)

  const companyObject = {
    companyName: newCompanyName,
    jobTitle: newJobTitle
  }

  const deleteExistingCompany = (event) => {
    const companyId = event.target.closest('li').id
    const selectedCompany = companies.filter(company => company.id === companyId)[0].name
    if(window.confirm(`Delete ${selectedCompany} from Hitlist?`)) {
      companyService
        .deleteCompany(companyId)
        .then(deletedCompany => {
          console.log(deletedCompany)
          const updatedCompanies = companies.filter(company => company.id !== deletedCompany.id)
          setCompanies(updatedCompanies)
        })
    }else {
      alert(`${selectedCompany} will NOT be deleted.`)
    }
  }

  return (
    <div>
      <h1>test</h1>
      <CompanyForm />
      <ul>
      {
        companies.map(company => 
          <Company 
            key={company.id}
            id={company.id}
            name={company.companyName}
            title={company.jobTitle}
            location={company.location}
            onClick={deleteExistingCompany}
          />
        )
      }
      </ul>
    </div>
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