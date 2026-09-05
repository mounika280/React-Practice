import {useState} from 'react'
import './counter.css'
function Counter()
{  
    let stack=10;
    let[counter,setCounter]=useState(0)
    return(
        <>
       
       <h1>Counter App in react</h1>
        <div className='wraper'>
            <button className='minus' disabled={counter===0} onClick={()=>{
               if(counter>0)
               {
                 setCounter(counter-1)
               }
               }}>-</button>
            <p className='counter'>{counter}</p>
            <button className='plus' disabled={counter===stack} onClick={()=>{
               if(counter<stack){
                 setCounter(counter+1)
               }
            }}
            >+</button>

        </div>

        </>
    )
}
export default Counter