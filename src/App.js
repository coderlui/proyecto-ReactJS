import './App.css';
import Product from "./components/Product";

function App () {
    const product = [
        {name: "Shell Decor Necklace", price: 39900},
        {name: "Mixed Charm Necklace", price: 27900},
        {name: "3pcs Necklace", price: 23900},
        {name: "Shell Decor Necklace", price: 39900},
    ];

    return (
        <div className="App">
            <h1>Welcome to our Website</h1>
            <hr />
            {product.map(({ name, price }) => (
                <Product key={name} name={name} price={price} />
            ))}

        </div>
    );
}

export default App;