import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const refreshCart = async () => {

    }

    return (
        <CartContext.Provider
        value={{
            updateCart,
            clearCart,
            removeCartItem
        }}>
            {children}
            </CartContext.Provider>
    );
};

export {CartProvider, CartContext};