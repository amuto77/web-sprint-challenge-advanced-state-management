import React from 'react'

function SmurfCard(props) {
    const { name, age, height, id } = props.smurf
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{height}</p>
            <p>{id}</p>
        </div>
    )
}
export default SmurfCard