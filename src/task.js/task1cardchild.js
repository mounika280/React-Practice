import "./task1.css";
function Studentcard(props)
{
  return(
    <div className="studentcard">
        <img className="studentimage"
                src={props.image}
                alt={props.name}
        />
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>College: {props.college}</p>
        <p>Branch: {props.branch}</p>
        <p>Email: {props.email}</p>
    </div>
  )
}
export default Studentcard