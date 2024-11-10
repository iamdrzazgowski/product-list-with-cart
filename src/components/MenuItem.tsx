function MenuItem() {
    return (
        <li className='product-item'>
            <div className='image-container'>
                <img src='/src/assets/images/image-baklava-desktop.jpg' />
                <button>
                    <img src='/src/assets/images/icon-add-to-cart.svg' />
                    Add to Cart
                </button>
            </div>
            <div className='description'>
                <span>Category</span>
                <h2>Product name</h2>
                <span>Price</span>
            </div>
        </li>
    );
}

export default MenuItem;
