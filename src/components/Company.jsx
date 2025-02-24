import CompanyName from "./CompanyName"
import JobTitle from "./JobTitle"
import Location from "./Location"
import DeleteCompanyButton from "./DeleteCompanyButton"

const Company = ({ id, name, title, location, onClick }) => {
    return (
        <li
            id={id}
            className="flex flex-col justify-center items-center w-80 h-64 gap-y-4 border-2 border-card-cream rounded-lg shadow-xl bg-card-cream"
        >
            <CompanyName name={name} />
            <JobTitle title={title} />
            <Location location={location} />
            <DeleteCompanyButton onClick={onClick} />
        </li>
    )
}

export default Company