import React from 'react'

function CenteredDiv(props) {
    return (
        <div className="text-center">
            {props.children}
        </div>
    )
}

export default CenteredDiv;