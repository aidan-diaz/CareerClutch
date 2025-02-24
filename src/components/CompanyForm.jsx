const CompanyForm = ({ onSubmit, handleCompanyNameChange, handleJobTitleNameChange, handleLocationNameChange, newCompanyName, newJobTitle, newLocation }) => {
    return (
        <form onSubmit={onSubmit} id="addCompanyForm" className="flex flex-col justify-center items-center gap-x-8 gap-y-8">
            <h2>Add a New Company</h2>
            <section className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex flex-col justify-center items-center">
                    <span>Company Name: </span>
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full max-w-[250px] min-w-[150px]"
                        type="text"
                        onChange={handleCompanyNameChange}
                        value={newCompanyName}
                        placeholder="Enter a Company Name..."
                    />
                </div>
                <div className="flex flex-col justify-center items-center"> 
                    <span>Job Title: </span>
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full max-w-[250px] min-w-[150px]"
                        type="text"
                        onChange={handleJobTitleNameChange}
                        value={newJobTitle}
                        placeholder="Enter a Job Title..."
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span>Location: </span>
                    <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full max-w-[250px] min-w-[150px]"
                    type="text"
                    onChange={handleLocationNameChange}
                    value={newLocation}
                    placeholder="Enter a Location..."
                    />
                </div>
            </section>
            <div>
                <button 
                    className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="submit">
                        Add Company
                </button>
            </div>
        </form>
    )
}

export default CompanyForm


