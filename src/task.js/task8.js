import { useState } from "react";

function StudentDetails() {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <h2>Student Details</h2>

            {showDetails && (
                <div>
                    <p>Name: Ananya</p>
                    <p>Age: 21</p>
                    <p>Branch: CSE</p>
                    <p>College: ABC College</p>
                </div>
            )}

            <button onClick={() => {setShowDetails(!showDetails)}}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </div>
    );
}
export default StudentDetails
