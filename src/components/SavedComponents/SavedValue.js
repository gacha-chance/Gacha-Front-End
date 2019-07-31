import React from 'react'

const SavedValue = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            <div style={{margin: '2px'}}>
                <h2>[Base Chance]</h2>
                {props.chance.map(obj => <h3>{obj.chance}%</h3>)}
            </div>
            <div style={{margin: '2px'}}>
                <h2>[Desired Rolls]</h2>
                {props.desired.map(obj => <h3>{obj.desiredOutcome}</h3>)}
            </div>
            <div style={{margin: '2px'}}>
                <h2>[Number of Rolls]</h2>
                {props.rolls.map(obj => <h3>{obj.rollNum}</h3>)}
            </div>
            <div style={{margin: '2px'}}> 
                <h2>[Compounded Chance]</h2>
                {props.comp.map(obj => <h3>{obj.compoundedChance}%</h3>)}
            </div>
        </div>       

    )
}


export default SavedValue