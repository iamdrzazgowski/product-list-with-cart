import MenuList from './MenuList';

function Menu({ onAddToCart, cart, onIncrementProduct, onDecrementProduct }) {
    return (
        <div className='products-container'>
            <h1>Desserts</h1>

            <MenuList
                onAddToCart={onAddToCart}
                cart={cart}
                onIncrementProduct={onIncrementProduct}
                onDecrementProduct={onDecrementProduct}
            />
        </div>
    );
}

export default Menu;
