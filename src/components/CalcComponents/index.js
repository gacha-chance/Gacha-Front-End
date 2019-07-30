import React from 'react';



const Calculator = () => {


    return (
        <div className="calcContainer">
            
            <div className="buttonDisplayContainer">
                <button className="calculateButton">Calculate!</button>
                <div className="probabilityDisplay">
                    <h1>Hello</h1>
                    <p>Test text</p>
                </div>
                <button className="saveButton">Save</button>
            </div>
        
            <div className="inputContainer">
                <form>
                    <input name="actualSpawns" type="text "/>
                    <input name="possibleSpawns" type="text "/>
                    <input name="desiredSuccesses" type="text "/>
                </form>
            </div>
            
            <div className="descContainer">
                <p></p>
                <p></p>
                <p></p>
            </div>
        
        </div>
    )
}

export default Calculator;