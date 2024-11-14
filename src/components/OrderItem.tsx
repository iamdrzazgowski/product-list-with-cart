function OrderItem({ product }) {
    return (
        <li>
            <div className='order-item'>
                <div className='order-details'>
                    <img src={product.image.thumbnail} />
                    <div className='product-details'>
                        <p>{product.name}</p>
                        <div className='single-price'>
                            <span className='quantity'>
                                {product.quantity}x
                            </span>
                            <span className='price'>
                                @${product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <p className='total-price'>
                    ${(product.price * product.quantity).toFixed(2)}
                </p>
            </div>
        </li>
    );
}

export default OrderItem;
