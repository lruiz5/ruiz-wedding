import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="wpo-section-title">
            <h4>{props.subTitle}</h4>
            <h2>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitle;