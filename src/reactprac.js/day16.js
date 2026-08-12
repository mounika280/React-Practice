
//    function State()
//     {
//         useState()
//         let counter =0
//         return(
//             <>
//             <h1>Counter Value : {counter}</h1>
//             <button onClick={updateCounter}>Change</button>
//             </>
//         )
//     function updateCounter()
//     { 
//         ++counter;
//         console.log(counter)
//     }
//     }
//     export default State



//here we use usestate

//  import React,{useState} from 'react'
// function State()
// {
//   let [counter,updateCounter]=useState(0)
//     return(
//         <>
//         <h1>Counter Value : {counter}</h1>
//         <button onClick={()=>{updateCounter(++counter)}}>Change</button>
//         </>
//     )

// }
// export default State




// import React from 'react'
// class State extends React.Component
// {
//     counter= 0;
//     render()
//     {
//     return(
//         <>
//         <h1>Counter Value : {this.counter}</h1>
//         <button>Change</button>
//         </>
//     )
//     }
// }
// export default State





import React from 'react'
class State extends React.Component
{
    state={
            counter : 0
    }

    render()
    {
    return(
        <>
        <h1>Counter Value : {this.state.counter}</h1>
        <button onClick={()=>{
            this.setState({
                counter :this.state.counter+1
            }
            )
        }}>Change</button>
        </>
    )
    }
}
export default State