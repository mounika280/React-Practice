function ProductCard({ name, price, category, image })
 {
    return (
        <div className="card">
            <img className="productimage" 
            src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    );
}

//or
// function ProductCard(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.price}</p>
//             <p>{props.category}</p>
//         </div>
//     );
// }

// export default ProductCard;

export default ProductCard;