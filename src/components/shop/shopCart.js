import React, { Component } from 'react';
import CartProduct from './cartProduct';

function CartButton({ className, icon }) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}></i>
        </div>
    )
}

function CartContent({ className }) {
    let count = products.length;
    let productsJSX = products.map(product => <CartProduct key={product} />)
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products} />
        </div>
    )
}

function CartFooter({ className, products }) {
    const price = 7.89;
    return (

        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div >
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times'></CartButton>
                <CartContent className='shop-cart__content' products={[243, 1234, 53421, 123235, 765436, 234, 2123, 53421, 123235, 765436, 234, 2123]}></CartContent>
            </div>
        )
    }
}

export default ShopCart;