
const students =[
    {name: "Ananya", age: 21, branch: "CSE", college: "ABC College"},
    {name: "Rahul", age: 22, branch: "ECE", college: "ABC College"},
    {name: "Priya", age: 21, branch: "CSE", college: "ABC College"},
    {name: "Kiran", age: 22, branch: "IT", college: "ABC College"}
];
function Studentcard(props)
{
    return(
        <div style={{
         border: "1px solid black",
          padding: "15px",  
          margin: "10px",
          width: "250px"
   
        }}>
        <p>props.style</p>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.branch}</p>
        <p>{props.college}</p>
        </div>

    )
}
function Studentlist(){
    return(
        <div >
            {students.map((student)=>(
                <Studentcard 
                name={student.name}
                age={student.age}
                branch={student.branch}
                college={student.college}
                />
            ))}
        </div>
    )
}
export default Studentlist