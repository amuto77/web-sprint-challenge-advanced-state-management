import React from 'react'
import { connect } from 'react-redux'
import SmurfCard from './SmurfCard'

function SmurfContainer(props) {
    console.log(props) 
        return (
            <div>
                {props.smurfs && props.smurfs.map(smurf => {
                    return <SmurfCard smurf={smurf} key={smurf.id} />
                })}
            </div>
        )
    }

    const mapStatetoProps = (state) => {
        return {
            smurfs: state.smurfs
        }
    }

export default connect(mapStatetoProps, {})(SmurfContainer)