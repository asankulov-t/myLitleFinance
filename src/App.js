import React from 'react';
import Headers from "./components/Headers";
import './App.css';
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import AddTransation from "./components/AddTransation";
import {GlobalProvider} from "./context/GlobalState";

const App = () => {
    return (
            <GlobalProvider>
                <Headers/>
                <div className="container">
                    <Balance/>
                    <IncomeExpences/>
                    <TransactionList/>
                    <AddTransation/>
                </div>
            </GlobalProvider>
    );
};

export default App;