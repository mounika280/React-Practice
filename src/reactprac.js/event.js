// function Event(){
//     return(
//         <button>Click</button>
//     )
// }
// export default Event


// function Event(){
//     return(
//         <button onClick ={alert("hello")}>Click</button>
//     )
// }
// export default Event //here we r showing without clicking so





// function Event(){
//     function displayMessage()
//     {
//         alert("button clicked")
//     }
//     return(
//         <button onClick ={displayMessage}>Click</button>
//     )
// }
// export default Event





// function Event(){
//     function displayMessage(num)
//     {
//         alert("button clicked "+num)
//     }
//     return(
//         <button onClick ={()=>displayMessage(10)}>Click</button>// by calling the fun and we want ti give input alo then we use anonymus or arrow fun
//     )
// }
// export default Event



// function Event(){
//     function displayMessage(num,e)
//     {
//         // console.log(e.target)//to know on where the event happened
//         console.dir(e.target)//button will come in object form
//         alert("button clicked "+num)//if we use , that means it take as arguments show error
//     }
//     return(
//         <button onClick ={(e)=>displayMessage(10,e)}>Click</button>// by calling the fun and we want ti give input alo then we use anonymus or arrow fun
//     )
// }
// export default Event
 


// function Event(){
//     function displayMessage(num,e)
//     {
//         // console.log(e.target)//to know on where the event happened
//         console.dir(e.target)//button will come in object form
//         alert("button clicked "+num)//if we use , that means it take as arguments show error
//     }
//     return(
//         <input type='text'  onKeyUp={(e)=>{
//             displayMessage(10,e)
//         }}/>
//     )
// }
// export default Event