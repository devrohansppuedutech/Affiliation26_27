import { useEffect, useState } from "react";
import { getCollegeList } from "../services/collegeService";
import CollegeTable from "../components/CollegeTable";;

function CollegeList() {
const [colleges, setColleges] = useState([]);
useEffect(() => {
        loadColleges();
    }, []);
    const loadColleges = async () => {
        try {
            const data = await getCollegeList();
            setColleges(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">College List</h2>
                <CollegeTable colleges={colleges} />
            </div>
        </>
    );
}

export default CollegeList;
