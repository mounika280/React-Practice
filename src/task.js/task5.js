const Menu=[
    {name:"Pizza",price:250},
    {name:"Burger",price:150},
    {name:"Biryani",price:220},
    {name:"Dosa",price:80}
]


function Card(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
function FoodCard(props) {
    return (
        <Card>
            <h2>{props.name}</h2>
            <h2>₹{props.price}</h2>
        </Card>
    )
}
// function FoodCard(props)
// {
//     return(
//         <div>
//           <h2>{props.name}</h2>
//           <h2>₹{props.price}</h2>
//         </div>
//     )
// }

function Food()
{
    return(
        <div>
         <h1>Menu Card</h1>
         {Menu.map((foodd)=>(
          <FoodCard
          name={foodd.name}
          price={foodd.price}
          />
         ))}

        </div>
    )
}
export default Food;
