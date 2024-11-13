import data from '../data/data.json';
import MenuItem from './MenuItem';

function MenuList({
    onAddToCart,
    cart,
    onIncrementProduct,
    onDecrementProduct,
}) {
    const productData = data;

    return (
        <ul className='products-grid-container'>
            {productData.map((product) => (
                <MenuItem
                    product={product}
                    onAddToCart={onAddToCart}
                    cart={cart}
                    onIncrementProduct={onIncrementProduct}
                    onDecrementProduct={onDecrementProduct}
                    key={product.id}
                />
            ))}
        </ul>
    );
}

export default MenuList;
