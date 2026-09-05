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



// import React ,{useState}from 'react'//usestate is in react libraray nd use state return array in that we have [variable,function]
// function State()
// { 
  
//    let price=15000
//    let[productname,updateName] =useState('samsung')//initial ga [variable lo usestate lo unna val untadhi,fun cal cheyyadam dwara val modify cheyochhu]
//         return(
//             <>
//             <h1>Product:{productname}</h1>
//             <p>Price:{price}</p>
//             </>
//         )
//     }
// export default State




// import React ,{useState}from 'react'
// function State()
// { 
//    let price=15000
//    let[productname,updateName] =useState('samsung')
//    return(
//             <>
//             <h1>Product:{productname}</h1>
//             <p>Price:{price}</p>
//             <input  id='pname'/>
//             <button onClick={()=>{
//                 let pname=document.getElementById('pname').value;
//                 // productname=pname;
//                 // console.log(productname);//here we only see updatedvalue in browser but not in browser becuse we r not using fun to update the val od productname   
//             // updateName(pname) // 1 way to update the val od productname
            
//             //  updateName(()=>{
//             //     return "react"
//             //  })// 2nd way to update the val of procuct name here 

//             updateName((prev)=>{
//                 return prev+pname
//              })//here we r using prev val of productname and adding new val to it 
          

//             }}>Update</button>
//             </>
//         )
//     }
// export default State



//to update price

//  import React ,{useState}from 'react'
// function State()
// { 
//    let[productname,updateName] =useState('samsung')
//    let[price,updatePrice]=useState(15000)// it will be lenghty if we have many values to update so we can use obj to update the products
//    return(
//             <>
//             <h1>Product:{productname}</h1>
//             <p>Price:{price}</p>
//             <input  id='pname'/>
//             <button onClick={()=>{
//             let mprice=document.getElementById('pname').value;
//             updatePrice(mprice) 
//             }}>Update</button>
//             </>
//         )
//     }
// export default State




// import React ,{useState}from 'react'
// function State()
// {
//    let[product,updateProduct] =useState({
//       pname:'samsung',
//       price:15000
//    })
//           return(
//             <>
//             <h1>Product:{product.pname}</h1>
//             <p>Price:{product.price}</p>
//             <h1>Product:{JSON.stringify(product)}</h1>
           {/* here product is object so we cant display products of objects direactly 
           but we can display the properties so we have to change obj to string  by json.stringfy method  */}

//             <input  id='pname'/>
//             <button onClick={()=>{
//             let mprice=document.getElementById('pname').value;
//             updateProduct({
//                 // pname:product.pname,
//                 // price:mprice
//                 ...product,
//                 price:mprice// here we r using object destructuring concept to get the previous val of product and then we r updating the price property of prod price
//             })
//             }}>Update</button>
//             </>
//         )
//     }
// export default State
// react method ni usestate lin nundi import chesikovali
// usesate ane method ni call chesyyali
// method ni call chesetappudu manam
// edaithe information dynamic ga render cheyyali anukuntunnamo dhani intitial value ni usestate lo ivvali
// usestate method return chese array lo 1st val is variable and 2nd is fun to update the val of variable