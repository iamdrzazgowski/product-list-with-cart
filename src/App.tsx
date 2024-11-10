import { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <div className='container'>
            <Menu />
            <Cart />
        </div>
    );
}

export default App;
