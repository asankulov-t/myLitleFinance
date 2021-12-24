import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const IncomeExpences = () => {
    const {transactions}=useContext(GlobalContext);

    const amount=transactions.map(transaction=>transaction.amount);
    const income=amount.filter(item=>item>0).reduce((acc, item)=>(acc+=item),0)
    const expense=(amount.filter(item=>item<0).reduce((acc, item)=>(acc+=item),0)*-1)

    return (
        <div className={'inc-exp-container'}>
            <div>
                <h4>Доходы</h4>
                <p id={'money-plus'} className={'money plus'}>+${income}</p>
            </div>
            <div>
                <h4>Расходы</h4>
                <p id={'money-minus'} className={'money minus'}>-${expense}</p>
            </div>
        </div>
    );
};

export default IncomeExpences;