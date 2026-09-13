import { useState } from "react";
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },
    {
        id: 2,
        name: "Phone",
        price: 25000
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000
    },
    {
        id: 4,
        name: "Keyboard",
        price: 2000
    }
];


// LikeButton component
function LikeButton() {

    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? "♥ Liked" : "♡ Like"}
        </button>
    );
}


// ProductCard component
function ProductCard(props) {

    return (
        <div className="product-card">

            <h2>{props.name}</h2>

            <p>₹{props.price}</p>

            <LikeButton />

        </div>
    );
}


// ProductList component
function ProductList() {

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                />
            ))}

        </div>
    );
}
export default ProductList




