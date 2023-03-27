import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { setAlert } from '../../state/action-creators/alert'
import { REMOVE_ALERT } from '../../state/action-creators/types'
import { removeAlertExp } from '../../state/action-creators/alert'


const Alert = ({alerts, setAlert,removeAlertExp}) => alerts !== null && alerts.length > 0 && alerts.map(alert =>(
    <div key= {alert.id} className="flex justify-center ">
     
     <div className="w-full max-w-md flex justify-between bg-red-600 cursor-pointer p-3">
     <h1 className=''>{alert.msg}</h1>
     <div onClick={() => removeAlertExp(alert.id)}>x</div>
     </div>
    </div>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
    alerts: state.alert
})

export default connect(mapStateToProps, {setAlert,removeAlertExp })(Alert)