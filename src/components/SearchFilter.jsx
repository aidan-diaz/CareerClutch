const SearchFilter = ({ onChange, filter }) => {
    return (
        <form>
            <span>Search for a Company: </span><input type="text" onChange={onChange} value={filter} />
        </form>
    )
}

export default SearchFilter