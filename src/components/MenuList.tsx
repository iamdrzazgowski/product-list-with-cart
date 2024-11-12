import data from '../data/data.json';
import MenuItem from './MenuItem';

function MenuList({ onAddToCart }) {
    const productData = data;

    return (
        <ul className='products-grid-container'>
            {productData.map((product) => (
                <MenuItem
                    product={product}
                    onAddToCart={onAddToCart}
                    key={product.id}
                />
            ))}
        </ul>
    );
}

export default MenuList;
