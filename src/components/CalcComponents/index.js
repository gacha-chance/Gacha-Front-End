import React, { useState } from 'react';
import { connect } from 'react-redux';



const Calculator = (props) => {

    const [values, setValues] = useState({attempts: 0, chance: 0.00, desiredSuccesses: 0})

    const probability = (100 * (1 - (Math.pow((1-(values.chance/100)) , values.attempts / values.desiredSuccesses)))).toFixed(2);

    const changeHandler = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
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
                    <input name="attempts" type="number" placeholder="# of Pulls" onChange={changeHandler} />
                    <input name="chance" type="number" placeholder="% Chance of Success" onChange={changeHandler} />
                    <input name="desiredSuccesses" type="number" placeholder="# of Successes Desired" onChange={changeHandler} />
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

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {})(Calculator);
