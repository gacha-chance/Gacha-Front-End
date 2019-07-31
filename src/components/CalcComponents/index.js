import React, { useState } from 'react';



const Calculator = () => {

    const [ attempts , setAttempts ] = useState(0);
    const [ acquireChance , setAcquireChance ] = useState(0);
    const [ successes , setSuccesses ] = useState(0);

    const probability = (100 * (1 - (Math.pow((1-(acquireChance)) , attempts / successes)))).toFixed(2);

    const changeAttempts = (event) => {
        return setAttempts(event.target.value)
    }

    const changeChance = (event) => {
        return setAcquireChance(event.target.value)
    }

    const changeSuccesses = (event) => {
        return setSuccesses(event.target.value)
    }

    const captionHandler = () => {

    }

    return (
        <div className="calcContainer">
            
            <div className="buttonDisplayContainer">
                <div className="probabilityDisplay">
                    <h1>{["NaN", "Infinity", "-Infinity"].includes(probability.toString()) ? "Enter some numbers below to get started." : probability + "%"}</h1>
                    <p>Snarky Caption Goes Here.</p>
                </div>
                <button className="saveButton">Save</button>
            </div>
        
            <div className="inputContainer">
                <form>
                    <input name="attempts" type="number" placeholder="# of Pulls" onChange={changeAttempts} />
                    <input name="possibleSpawns" type="number" placeholder="% Chance of Success" onChange={changeChance} />
                    <input name="desiredSuccesses" type="number" placeholder="# of Successes Desired" onChange={changeSuccesses} />
                </form>
            </div>
            
            <div className="descContainer">
                <p>Do you have a 20x spawn? 10x? Gonna break out the wallet and do 100x? Write that here.</p>
                <p>How many monsters/weapons/items/etc. are possible to get? This is usually an unfortunately high number.</p>
                <p>How many times are you trying to get the big one? You'll notice anything other than 1 here makes your probability of getting lucky go down pretty significantly, so don't push your luck.</p>
            </div>
        
        </div>
    )
}

export default Calculator;
