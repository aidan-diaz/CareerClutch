import { useState, useEffect } from 'react'
import './App.css'
import companyService from './services/companies'
import Header from './components/Header'
import SearchFilter from './components/SearchFilter'
import CompanyForm from './components/CompanyForm'
import Company from "./components/Company"
import NoResults from './components/NoResults'
import NoCompanies from './components/NoCompanies'
import Footer from './components/Footer'

function App() {
  const [companies, setCompanies] = useState([])
  const [newCompanyName, setNewCompanyName] = useState('')
  const [newJobTitle, setNewJobTitle] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [newLink, setLink] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  useEffect(() => {
    companyService
      .getAllCompanies()
      .then(initialCompanies => {
        setCompanies(initialCompanies)
      })
  }, [])

  const companyObject = {
    companyName: newCompanyName,
    jobTitle: newJobTitle,
    location: newLocation,
    link: newLink
  }

  const returnFilteredCompanies = () => {
    return companies
    .filter(company => 
      company.companyName.slice(0, companyFilter.length).trim().toLowerCase() === companyFilter.toLowerCase())
    .map(company => 
        <Company 
          key={company.id}
          id={company.id}
          name={company.companyName}
          title={company.jobTitle}
          location={company.location}
          link={company.link}
          onClick={deleteExistingCompany}
          />
    )
  }

  const returnAllCompanies = () => {
    return (
      companies.map(company => 
        <Company 
          key={company.id}
          id={company.id}
          name={company.companyName}
          title={company.jobTitle}
          location={company.location}
          link={company.link}
          onClick={deleteExistingCompany}
        />
      )
    )
  }

  const checkForCompanyFilter = () => {
    if(companies.length && companyFilter) {
      const filter = compareCompanyNamesToFilter()
      if(filter.length) {
        return (
          returnFilteredCompanies()
        )
      }else {
        return (
          <NoResults />
        )
      }
      
    }else if(companies.length) {
      return (
        returnAllCompanies()
      )
    }else {
      return (
        <NoCompanies />
      )
    }  
  }

  const addCompany = (event) => {
    event.preventDefault()
    if(!(newCompanyName && newJobTitle && newLocation && newLink)) {
      alert('Please enter all fields.')
    }else {
      if(findExisting('companyName', newCompanyName).length 
      && findExisting('jobTitle', newJobTitle).length 
      && findExisting('location', newLocation).length) {
      alert(`Company Name: ${newCompanyName}, Job Title: ${newJobTitle}, Location: ${newLocation} already exists on Hitlist`)
      setNewCompanyName('')
      setNewJobTitle('')
      setNewLocation('')
      setLink('')
    }else {
      companyService
      .createNewCompany(companyObject)
      .then(returnedCompany => {
        setCompanies(companies.concat(returnedCompany))
      })
    setNewCompanyName('')
    setNewJobTitle('')
    setNewLocation('')
    setLink('')
    }
    }
  }

  const compareCompanyNamesToFilter = () => {
    return companies
    .filter(company => 
      company.companyName.slice(0, companyFilter.length).trim().toLowerCase() === companyFilter.toLowerCase())
  }

  const handleCompanyNameChange = (event) => {
    setNewCompanyName(event.target.value)
  }

  const handleJobTitleNameChange = (event) => {
    setNewJobTitle(event.target.value)
  }
  const handleLocationNameChange = (event) => {
    setNewLocation(event.target.value)
  }

  const handleLinkChange = (event) => {
    setLink(event.target.value)
  }

  const handleFilterChange = (event) => {
    setCompanyFilter(event.target.value)
  }

  const findExisting = (property, state) => {
    return companies.filter(company => company[property].trim().toLowerCase() === state.trim().toLowerCase())
  }

  const deleteExistingCompany = (event) => {
    const companyId = event.target.closest('li').id
    const selectedForDelete = companies.filter(company => company.id === companyId)[0]
    console.log(selectedForDelete)
    if(window.confirm(`Delete (Company Name: ${selectedForDelete.companyName}, Job Title: ${selectedForDelete.jobTitle}, Location: ${selectedForDelete.location}) from Hitlist?`)) {
      companyService
        .deleteCompany(companyId)
        .then(deletedCompany => {
          console.log(deletedCompany)
          const updatedCompanies = companies.filter(company => company.id !== deletedCompany.id)
          setCompanies(updatedCompanies)
        })
    }else {
      alert(`(Company Name: ${selectedForDelete.companyName}, Job Title: ${selectedForDelete.jobTitle}, Location: ${selectedForDelete.location}) will NOT be deleted.`)
    }
  }

  return (
    <div className="bg-background-orange min-h-screen caladea-regular">
      <Header />
      <SearchFilter onChange={handleFilterChange} filter={companyFilter} />
      <CompanyForm
        onSubmit={addCompany}
        handleCompanyNameChange={handleCompanyNameChange}
        handleJobTitleNameChange={handleJobTitleNameChange}
        handleLocationNameChange={handleLocationNameChange}
        handleLinkChange={handleLinkChange}
        newCompanyName={newCompanyName}
        newJobTitle={newJobTitle}
        newLocation={newLocation}
        link={newLink}
      />
      <h2 className="text-center mb-[50px] caladea-bold text-[28px] text-names">Your Hitlist</h2>
      <ul
        className="flex flex-wrap justify-center items-center gap-x-4 gap-y-16 pb-[40px] min-h-[105px]"
      >
      {checkForCompanyFilter()}
      </ul>
      <Footer />
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
//filter for all three categories (name, title, location)

/*

filter ? 

check to see if current state equals corresponding portion of companies
example: if state length is 2, check the first two characters of each company to see if they are strictly equal to the state
if they are equal, then display those companies and hide any that aren't equal
if they are NOT equal, then do not show any companies
if nothing is typed into the filter, then show ALL companies

*/

