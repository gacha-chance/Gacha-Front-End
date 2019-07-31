import React from 'react'
import { connect } from 'react-redux'
import { fetchCompounded, fetchChance, fetchDesire, fetchRolls } from '../../actions'
import SavedValue from './SavedValue';


const SavedPage = (props) => {

    const fetchData = e => {
        e.preventDefault()
        props.fetchCompounded()
        props.fetchChance()
        props.fetchDesire()
        props.fetchRolls()
    }

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <SavedValue comp={props.saved.compounded} desired={props.saved.desired} rolls={props.saved.rollNum} chance={props.saved.chance} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        saved: state.saved
    }
}

export default connect(mapStateToProps, { fetchCompounded, fetchDesire, fetchRolls, fetchChance })(SavedPage)
