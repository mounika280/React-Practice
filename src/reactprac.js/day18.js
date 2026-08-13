// import React from 'react'
// function State()
// { 
//     product='samsung'
//     price=15000
//         return(
//             <>
//             <h1>Pro duct:{product}</h1>
//             <p>Price:{price}</p>
//             </>
//         )
//     }
// export default State



import React ,{useState}from 'react'//usestate is in react libraray nd use state return array in that we have [variable,function]
function State()
{ 
  
   let price=15000
   let[productname,updateName] =useState('samsung')//initial ga [variable lo usestate lo unna val untadhi,fun cal cheyyadam dwara val modify cheyochhu]
        return(
            <>
            <h1>Product:{productname}</h1>
            <p>Price:{price}</p>
            </>
        )
    }
export default State