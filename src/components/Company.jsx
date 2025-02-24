const Company = ({ id, name, title }) => {
    console.log(id, name, title)
    return (
        <li id={id}>
            <h2>{name}</h2>
            <h3>{title}</h3>
        </li>
    )
}

export default Company