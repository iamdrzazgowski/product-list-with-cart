import { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((currCart) => {
            const existingProduct = currCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return currCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...currCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div className='container'>
            <Menu onAddToCart={handleAddToCart} />
            <Cart cart={cart} />
        </div>
    );
}

export default App;
