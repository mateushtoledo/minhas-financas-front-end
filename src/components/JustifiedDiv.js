import React from 'react'

function JustifiedDiv(props) {
    return (
        <div className="text-justify">
            {props.children}
        </div>
    )
}

export default JustifiedDiv;