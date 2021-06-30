import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext();


export const ItemsProvider = (props) => {

    const [state, setState] = useState('helloo')

    return (
        <CartContext.Provider value={[state, setState]}>
            {props.children}
        </CartContext.Provider>
    )
};