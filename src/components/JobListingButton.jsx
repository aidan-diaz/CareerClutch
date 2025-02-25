const JobListingButton = ({ link }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none hover:cursor-pointer disabled:opacity-50 disabled:shadow-none ml-2"
        >
            Job Listing
        </a>
    )
}

export default JobListingButton