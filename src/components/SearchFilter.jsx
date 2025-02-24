const SearchFilter = ({ onChange, filter }) => {
    return (
        <form id="filterForm" className="flex flex-col justify-center items-center gap-y-8">
            <h3 className="caladea-bold text-[24px] text-center">Search for a Company: </h3>
            <input
                className="w-full bg-input placeholder:text-slate-400 text-slate-700 text-sm border border-input-border-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full max-w-[250px] min-w-[150px] mb-[50px]"
                type="text"
                onChange={onChange}
                value={filter}
                placeholder="Enter a Company Name..." 
            />
        </form>
    )
}

export default SearchFilter