import MenuList from './MenuList';

function Menu({ onAddToCart }) {
    return (
        <div className='products-container'>
            <h1>Desserts</h1>

            <MenuList onAddToCart={onAddToCart} />
        </div>
    );
}

export default Menu;
