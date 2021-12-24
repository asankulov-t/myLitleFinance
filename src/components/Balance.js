import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";


const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transition=>transition.amount);
    const total=amounts.reduce((acc, item)=>(acc+=item),0)
    return (
        <>
            <h3>My balance</h3>
            <h2>${total}</h2>
        </>
    );
};

export default Balance;