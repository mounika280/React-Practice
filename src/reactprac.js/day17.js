// import React from 'react'
// class State extends React.Component
// { 
//     product='samsung'
//     price=15000
//     render(){
//         return(
//             <>
//             <h1>Product:{this.product}</h1>
//             <p>Price:{this.price}</p>
//             </>
//         )
//     }
// }
// export default State  //in this code it will not update after changong code so to 
//overcome this we use state --if we want to show the info dynamically-- in a  component which we want so show
//dynamycally-- we weite that info in object form that we put in state  


// import React from 'react'
// class State extends React.Component
// { 
//          state= {
//          product:'samsung',
//          price:15000
//         }
//     render(){
//         return(
//             <>
//             <h1>Product:{this.state.product}</h1>
//             <p>Price:{this.state.price}</p>

//             <input id='price' type='number'/>
//             <button onClick={()=>{

//                 let p=document.getElementById('price').value;
//                 console.log(p);
//                 this.setState({
//                     price:p
//                 })
//             }}>Change</button>
//             </>
//         )
//     }
// }
// export default State  but its not showinh in browser



import React from 'react'
class State extends React.Component
{ 
         state= {
         product:'samsung',
         price:15000
        }
        constructor(){
            super();
            this.updatePrice=this.updatePrice.bind(this)
        }
    render(){
        return(
            <>
            <h1>Product:{this.state.product}</h1>
            <p>Price:{this.state.price}</p>

            <input id='price' type='number'/>
            <button onClick={this.updatePrice}>Change</button>
            </>
        )
    }

    updatePrice(){

        let p=document.getElementById('price').value;
                this.setState({
                    price:p
                }, ()=>{
                  console.log(this.state)})
             
    }
}
export default State