import Button from './Button';

function CartItem({ product, onDeleteProduct }) {
    return (
        <li>
            <div className='cart-item-details'>
                <span className='product-name'>{product.name}</span>
                <div className='price-details'>
                    <span className='quantity'>{product.quantity}x</span>
                    <span className='price'>@ ${product.price.toFixed(2)}</span>
                    <span className='total-price'>
                        ${(product.quantity * product.price).toFixed(2)}
                    </span>
                </div>
            </div>

            <Button
                className='remove-btn'
                onClick={() => onDeleteProduct(product)}
                icon='/images/icon-remove-item.svg'
                children={undefined}
            />
            {/* <button
                className='remove-btn'
                onClick={() => onDeleteProduct(product)}>
                <img src='/src/assets/images/icon-remove-item.svg' />
            </button> */}
        </li>
    );
}

export default CartItem;
