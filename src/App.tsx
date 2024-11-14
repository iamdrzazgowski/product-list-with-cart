import { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Modal from './components/Modal';

function App() {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleAddToCart = (product) => {
        setCart((currCart) => [...currCart, { ...product, quantity: 1 }]);
    };

    const handleDeleteProduct = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    const handleIncrementProduct = (product) => {
        const isOnCart = cart.find((item) => item.id === product.id);

        if (!isOnCart) return;

        setCart((currCart) =>
            currCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecrementProduct = (product) => {
        const isOnCart = cart.find((item) => item.id === product.id);

        if (!isOnCart) return;

        setCart((currCart) =>
            currCart
                .map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const handleOpenModal = () => {
        setIsOpen((curr) => !curr);
    };

    const handleStartNewOrder = () => {
        handleOpenModal();
        setCart([]);
    };

    return (
        <div className='container'>
            <Menu
                onAddToCart={handleAddToCart}
                cart={cart}
                onIncrementProduct={handleIncrementProduct}
                onDecrementProduct={handleDecrementProduct}
            />
            <Cart
                cart={cart}
                onDeleteProduct={handleDeleteProduct}
                onToggle={handleOpenModal}
            />
            {isOpen && (
                <Modal cart={cart} onStartNewOrder={handleStartNewOrder} />
            )}
        </div>
    );
}

export default App;
