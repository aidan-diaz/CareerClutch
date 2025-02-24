import CompanyName from "./CompanyName"
import JobTitle from "./JobTitle"
import DeleteCompanyButton from "./DeleteCompanyButton"

const Company = ({ id, name, title, onClick }) => {
    return (
        <li id={id}>
            <CompanyName name={name} />
            <JobTitle title={title} />
            <DeleteCompanyButton onClick={onClick} />
        </li>
    )
}

export default Company