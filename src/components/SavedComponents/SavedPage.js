import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCompounded, fetchChance, fetchDesire, fetchRolls } from '../../actions'
import SavedValue from './SavedValue';


const SavedPage = (props) => {

    const fetchData = () => {
        props.fetchCompounded()
        props.fetchChance()
        props.fetchDesire()
        props.fetchRolls()
    }

    useEffect(() => fetchData, [])

    useEffect(() => {console.log(props.saved)}, [])

    return (
            <SavedValue comp={props.saved.compounded} desired={props.saved.desired} rolls={props.saved.rollNum} chance={props.saved.chance} />
    )
}

const mapStateToProps = state => {
    return {
        saved: state.saved
    }
}

export default connect(mapStateToProps, { fetchCompounded, fetchDesire, fetchRolls, fetchChance })(SavedPage)
