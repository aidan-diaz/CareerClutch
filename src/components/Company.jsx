import CompanyName from "./CompanyName"
import JobTitle from "./JobTitle"

const Company = ({ id, name, title }) => {
    console.log(id, name, title)
    return (
        <li id={id}>
            <CompanyName name={name} />
            <JobTitle title={title} />
        </li>
    )
}

export default Company