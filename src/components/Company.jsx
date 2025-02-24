import CompanyName from "./CompanyName"
import JobTitle from "./JobTitle"
import Location from "./Location"
import DeleteCompanyButton from "./DeleteCompanyButton"

const Company = ({ id, name, title, location, onClick }) => {
    return (
        <li id={id}>
            <CompanyName name={name} />
            <JobTitle title={title} />
            <Location location={location} />
            <DeleteCompanyButton onClick={onClick} />
        </li>
    )
}

export default Company