import { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {};

    return (
        <div className='container'>
            <Menu />
            <Cart cart={cart} />
        </div>
    );
}

export default App;
