function MenuItem({ product, onAddToCart }) {
    return (
        <li className='product-item'>
            <div className='image-container'>
                <img src={product.image.desktop} />
            </div>
            <button
                className='add-to-cart-btn'
                onClick={() => onAddToCart(product)}>
                <img src='/src/assets/images/icon-add-to-cart.svg' />
                Add to Cart
            </button>
            <div className='description'>
                <span className='category'>{product.category}</span>
                <h2 className='title'>{product.name}</h2>
                <span className='price'>${product.price.toFixed(2)}</span>
            </div>
        </li>
    );
}

export default MenuItem;
