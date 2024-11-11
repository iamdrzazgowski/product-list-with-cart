import data from '../data/data.json';
import MenuItem from './MenuItem';

function MenuList() {
    const productData = data;

    return (
        <ul className='products-grid-container'>
            {productData.map((product) => (
                <MenuItem product={product} />
            ))}
        </ul>
    );
}

export default MenuList;
