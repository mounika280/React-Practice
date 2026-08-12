// import React from 'react'
// function Cat(){
//     return(
//         <React.Fragment>
//             <div>This is blueberry</div>
//             <div>This is strawberry</div>
//         </React.Fragment>
//     )
// }
// export default Cat

//or

// import React from 'react'
// function Cat(){
//     return(
//         <>
//             <div>This is blueberry</div>
//             <div>This is strawberry</div>
//         </>
//     )
// }

import React from 'react'
function Cat(){
    return(
        <div style={{'display':'flex','gap':20}}>
        <FlexItems/>
        </div>
    )
    
}


function FlexItems(){
    return(
        <>
            <div>This is blueberry</div>
            <div>This is strawberry</div>
            <div>This is cherry</div>
        </>
    )
}
export default Cat
