
import {useState} from 'react';
function Color()
{
    const[color,setColor]=useState("white");

    return(
        <div style={{backgroundColor: color,height:"100vh"}}>


            <h1>Background Color</h1>

            <h2>Current Color: {color}</h2>
            <button onClick={()=>{
                setColor("red")
            }}>Red</button>

            <button onClick={()=>{
                setColor("Blue")
            }}>Blue</button>

            <button onClick={()=>{
                setColor("Green")
            }}>Green</button>

            <button onClick={()=>{
                setColor("Yellow")
            }}>Yellow</button>

        </div>
    )
}
export default Color