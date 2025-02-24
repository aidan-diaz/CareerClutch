const CompanyForm = ({ onSubmit, handleCompanyNameChange, handleJobTitleNameChange, handleLocationNameChange, newCompanyName, newJobTitle, newLocation }) => {
    return (
        <form onSubmit={onSubmit}>
            <h2>Add a New Company</h2>
            <div>
                <span>Company Name: </span><input type="text" onChange={handleCompanyNameChange} value={newCompanyName} />
            </div>
            <div>
                <span>Job Title: </span><input type="text" onChange={handleJobTitleNameChange} value={newJobTitle} />
            </div>
            <div>
                <span>Location: </span><input type="text" onChange={handleLocationNameChange} value={newLocation} />
            </div>
            <button type="submit">Add Company</button>
        </form>
    )
}

export default CompanyForm


