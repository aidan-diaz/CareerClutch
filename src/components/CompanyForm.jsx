const CompanyForm = () => {
    return (
        <form>
            <h2>Add a New Company</h2>
            <div>
                <span>Company Name: </span><input type="text" />
            </div>
            <div>
                <span>Job Title: </span><input type="text" />
            </div>
            <button type="submit">Add Company</button>
        </form>
    )
}

export default CompanyForm