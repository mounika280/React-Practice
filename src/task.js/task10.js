
import { useState } from "react";
function App() {

    // Product data
    const products = [
        { name: "Apple", price: 100 },
        { name: "Milk", price: 50 },
        { name: "Bread", price: 40 },
        { name: "Eggs", price: 60 }
    ];

    // Quantity state
    const [quantities, setQuantities] = useState({
        Apple: 0,
        Milk: 0,
        Bread: 0,
        Eggs: 0
    });

    // Add button function
    function addProduct(productName) {
        setQuantities({
            ...quantities,
            [productName]: quantities[productName] + 1
        });
    }

    // Total cart items
    const totalItems =
        quantities.Apple +
        quantities.Milk +
        quantities.Bread +
        quantities.Eggs;

    return (
        <div >

            <h1>Shopping Cart</h1>

            {products.map((product) => (
                <div className="product" key={product.name}>

                    <h3>{product.name}</h3>

                    <p>₹{product.price}</p>

                    <p>Qty: {quantities[product.name]}</p>

                    <button onClick={() => addProduct(product.name)}>
                        Add
                    </button>

                </div>
            ))}

            <h2>Cart Items: {totalItems}</h2>

        </div>
    );
}

export default App;


