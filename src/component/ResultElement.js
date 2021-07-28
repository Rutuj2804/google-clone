import React from 'react'

const ResultElement = ({ title, link, redirect, snippet }) => {

    return (
        <div className="my-4">
            <h3 style={{marginBottom: "1px"}} ><a href={redirect}>{title}</a></h3>
            <h6 style={{marginBottom: "2px"}} ><a href={redirect}>{link}</a></h6>
            <p style={{ color: "#000"}} >{snippet}</p>
        </div>
    )
}

export default ResultElement
