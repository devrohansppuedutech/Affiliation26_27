import { useState } from "react";

function CollegeTable({ colleges }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredColleges = colleges.filter((college) =>
        college.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.id.toString().includes(searchTerm)
    );

    const recordsPerPage = 10;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredColleges.slice(
        indexOfFirstRecord,
        indexOfLastRecord
    );

    const totalPages = Math.ceil(filteredColleges.length / recordsPerPage);

    return (
        <>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {currentRecords.map((college) => (
                        <tr key={college.id}>
                            <td>{college.id}</td>
                            <td>{college.title}</td>
                            <td>{college.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="pagination justify-content-end">

                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                    <li
                        key={index}
                        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    >
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </li>

            </ul>
        </>
    )
}

export default CollegeTable;