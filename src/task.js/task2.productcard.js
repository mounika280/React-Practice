import './task2.css';
import products from "./task2product";
import ProductCard from "./task2card";
function Main() {
    return (
        <div>
            <h1>Products</h1>

            <div className="products">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}
export default Main;