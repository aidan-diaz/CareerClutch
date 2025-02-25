import CompanyName from "./CompanyName"
import JobTitle from "./JobTitle"
import Location from "./Location"
import JobListingButton from "./JobListingButton"
import DeleteCompanyButton from "./DeleteCompanyButton"

const Company = ({ id, name, title, location, link, onClick }) => {
    return (
            <li
                id={id}
                className="flex flex-col justify-center items-center w-80 h-64 gap-y-4 border-2 border-card-cream rounded-lg shadow-xl bg-card-cream hover:scale-105 transition duration-150 ease-in-out"
            >
                <CompanyName name={name} />
                <JobTitle title={title} />
                <Location location={location} />
                <div>
                <JobListingButton link={link} />
                <DeleteCompanyButton onClick={onClick} />
                </div>
            </li>
    )
}

export default Company