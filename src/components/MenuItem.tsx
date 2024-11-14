import Button from './Button';

function MenuItem({
    product,
    onAddToCart,
    cart,
    onIncrementProduct,
    onDecrementProduct,
}) {
    const isOnCart = cart.find((item) => item.id === product.id);

    const productQuantity = isOnCart ? isOnCart.quantity : 0;

    return (
        <li className='product-item'>
            <div
                className={`image-container ${
                    isOnCart ? 'selected-item' : ''
                }`}>
                <img src={product.image.desktop} />
            </div>
            <div className='button-container'>
                {!isOnCart ? (
                    <>
                        <Button
                            className='add-to-cart-btn'
                            onClick={() => onAddToCart(product)}
                            icon='/images/icon-add-to-cart.svg'>
                            Add to Cart
                        </Button>
                    </>
                ) : (
                    <div className='update-container'>
                        <Button
                            className='decrease-btn'
                            onClick={() => onDecrementProduct(product)}
                            icon='/images/icon-decrement-quantity.svg'
                            children={undefined}
                        />
                        <span className='item-counter'>{productQuantity}</span>

                        <Button
                            className='increase-btn'
                            onClick={() => onIncrementProduct(product)}
                            icon='/images/icon-increment-quantity.svg'
                            children={undefined}
                        />
                    </div>
                )}
            </div>
            <div className='description'>
                <span className='category'>{product.category}</span>
                <h2 className='title'>{product.name}</h2>
                <span className='price'>${product.price.toFixed(2)}</span>
            </div>
        </li>
    );
}

export default MenuItem;
