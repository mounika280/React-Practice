import {useState} from 'react';
function Counter()
{
  let stack=10;
  let[counter,setCounter]=useState(0)
  return(
    <>
    <h1>Counter App in react</h1>
    <div>  
    <button disabled={counter===0} onClick={()=>{
        if(counter>0)
        {
        setCounter(counter-1)
        }
    }}>-</button>  
    
    <button onClick={() => {setCounter(0)}}>
    Reset
    </button>

    <button disabled={counter===stack} onClick={()=>{
        if(counter<stack)
        {
        setCounter(counter+1)
        }
    }}>+</button>


     <p>Count: {counter}</p>
    </div>
    </>

  )
}
export default Counter